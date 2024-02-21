const { PrismaClient } = require('@prisma/client')

let prisma ;
const prismaClientSingleton = () => {
    const DATABASE_URL = process.env.DATABASE_URL;
    if (!DATABASE_URL) {
        throw new Error("Database URL required")
    }

    const databaseUrl = new URL(DATABASE_URL);
    if(!prisma) {

      return new PrismaClient({
        datasources: {
            db: {
                url: databaseUrl.toString(),
            },
        },
    })
    } 
    return prisma
}
prisma  = globalThis.prisma ?? prismaClientSingleton()


module.exports = prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma


/* 
// Hard-code a unique key, so we can look up the client when this module gets re-imported
const prisma = singleton("prisma", getPrismaClient);

function getPrismaClient() {
  const { DATABASE_URL } = process.env;
  invariant(typeof DATABASE_URL === "string", "DATABASE_URL env var not set");

  const databaseUrl = new URL(DATABASE_URL);

  const isLocalHost = databaseUrl.hostname === "localhost";

  const PRIMARY_REGION = isLocalHost ? null : process.env.PRIMARY_REGION;
  const FLY_REGION = isLocalHost ? null : process.env.FLY_REGION;

  const isReadReplicaRegion = !PRIMARY_REGION || PRIMARY_REGION === FLY_REGION;

  if (!isLocalHost) {
    if (databaseUrl.host.endsWith(".internal")) {
      databaseUrl.host = `${FLY_REGION}.${databaseUrl.host}`;
    }

    if (!isReadReplicaRegion) {
      // 5433 is the read-replica port
      databaseUrl.port = "5433";
    }
  }

  console.log(`🔌 setting up prisma client to ${databaseUrl.host}`);
  // NOTE: during development if you change anything in this function, remember
  // that this only runs once per server restart and won't automatically be
  // re-run per request like everything else is. So if you need to change
  // something in this file, you'll need to manually restart the server.
  const client = new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl.toString(),
      },
    },
  });
  // connect eagerly
  client.$connect();

  return client;
}

export { prisma }; */

/**
 * Create a singleton
// Borrowed & modified from https://github.com/jenseng/abuse-the-platform/blob/main/app/utils/singleton.ts
// Thanks @jenseng!
*/
/* const singleton = <Value>(
    name: string,
    valueFactory: () => Value,
): Value => {
    const g = global as any;
    g.__singletons ??= {};
    g.__singletons[name] ??= valueFactory();
    return g.__singletons[name];
};
 */