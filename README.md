# Prisma Server

Prisma server using pre-exisiting database

## Starting the db

1. clone repo
2. cd into directory
3. run `docker-compose up -d`
4. run `prisma deploy`
5. server should be running on localhost:4466
6. run `prisma token`
7. in the playground, select HTTP headers and add the following

```
{
  "authorization": "[YOUR AUTH TOKEN HERE]"
}
```

## Sample Queries

```
query findAskreddit {
  daysaves {
    _id
    createdAt
    updatedAt
    items {
      AskReddit {
        com
        found
      }
    }
  }
}

query findDogs {
  daysaves {
    _id
    items {
      dogs {
        com
        found
      }
    }
  }
}

query findAll {
  daysave(where: { _id: "5c9af3a22479ff13421ba115" }) {
    items {
      AskReddit {
        com
        found
      }
    }
  }
}

mutation createOne {
  createDaysave(
    data: {
      items: { create: { AskReddit: { create: { com: 100, found: 10 } } } }
    }
  ) {
    _id
    createdAt
  }
}

mutation deleteOne {
  deleteDaysave(where: { _id: "5c9af3a22479ff13421ba115" }) {
    _id
  }
}

mutation updateOne {
  updateDaysave(
    data: {
      items: { create: { AskReddit: { create: { com: 100, found: 2 } } } }
    }
    where: { _id: "5c9af3a22479ff13421ba115" }
  ) {
    items {
      AskReddit {
        com
        found
      }
    }
  }
}
```