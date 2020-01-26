# Issue github
 ## id does not assigned

Steps to run this project:

1. Run `npm i` command
2. Run `npm run db`
3. Run `npm run db:bash`

``` connect sys as sysdba```
   
```sql
   create USER C##SOVA IDENTIFIED BY 1234
   GRANT CONNECT TO C##SOVA
   GRANT CONNECT, RESOURCE, DBA TO  C##SOVA
   GRANT CREATE SESSION TO  C##SOVA
```

4. Run `npm test` 
