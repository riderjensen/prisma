# Prisma Server

Prisma server using pre-exisiting database

## Starting the db

1. docker-compose up -d
2. prisma deploy

## Sample Queries

```
# Write your query or mutation here
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