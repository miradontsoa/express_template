# An Express.js project starter template

This is a simple express project template based on javascript.

## Folder organization

Modules are grouped by folder (eg. products folder for all files related to products).


## Generate and migrate DB first

Configure env variable

.env file
```
PORT=3000

DATABASE_URL="postgresql://developer:developer@localhost:5432/tco_app"
```


```
npx prisma generate
npx prisma migrate dev
```

## Seed sample data
node prisma/seed.js

##