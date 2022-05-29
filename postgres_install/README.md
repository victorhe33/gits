## Installing PostgreSQL

PostreSQL is going to be our column-based database of choice for this course. PostgreSQL is an open source relational database management system (RDBMS).

To install PostgreSQL, execute the following command in your terminal:

```sh
brew install postgres
```

To confirm the installation, run the following command in your terminal:

```sh
postgres --version
```

Next, enter the following command in your terminal:

```sh
brew services start postgresql
```

This will ensure postgres remains running on our machines.

Now, create a database with your username:

```sh
createdb `whoami`
```

Confirm that you can enter the postgres shell with the following command:

```sh
psql
```

To exit the shell:

```sh
\q
```