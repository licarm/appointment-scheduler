# appointment-scheduler

### Set up database 
1. Start postgres
```bash
$ brew services start postgresql
```

2. create a user called 'carmen'
```bash
$ createuser -s carmen
```

3. run the db set up script
```bash
$ npm run db:setup
```

### Run app
```bash
$ npm start
```

### Assumptions
1. A coach's schedule availabilities can not be joined. A booking can not overlap two different slots.
2. An call can only be booked on the even hours from 8-4pm. So there are 4 time slots per day.