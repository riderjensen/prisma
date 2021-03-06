# Prisma Server

Prisma server using pre-exisiting database

## Starting the db

1. clone repo
2. cd into directory
3. run `docker-compose up -d`
4. run `prisma deploy`
5. run `npm install`
6. run `npm start`

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