### Exercício 1
a) Remove a coluna Salary
b) Altera a coluna gender para sex com 6 caracteres
c) Volta gender para gender com 255 caracteres
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
SELECT * FROM Table;
```


### Exercício 2
a) UPDATE Actor
   SET name = "Cris Rocha"
   SET date = "1989-05-23"
   WHERE id = "003";

b) UPDATE Actor
   SET name = "JULIANA PÃES"
   WHERE name = "Juliana Paes";

c) UPDATE Actor
   SET name = "Juliana Paes"
   WHERE name = "JULIANA PÃES";

d) UPDATE Actor
   SET name = "Nome Qualquer"
   SET birth_date = "1999-01-02" 
   AND salary = "1000000,00"
   AND gender = "male"
   WHERE id ="003";

### Exercício 3
a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b) DELETE FROM Actor;
   WHERE gender = "male" AND salary > 1000000;

### Exercício 4
a) SELECT MAX(salary) FROM Actor;
b) SELECT MIN(salary) FROM Actor;
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
d) SELECT SUM(salary) FROM Actor;

### Exercício 5
a) Não tenho a tabela criada, por perder aulas
b) SELECT id, name FROM Actor
   ORDER BY name DESC;
C) SELECT * FROM Actor ORDER BY salary;
d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e) SELECT AVG(salary) gender FROM Actor GROUB by gender;

### Exercício 6
a) ALTER TABLE Movie ADD playing_limit_date DATE;
b) ALTER TABLE Movie CHANGE rating rating FLOAT;
c) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";
d) DELETE FROM Movie WHERE id = "001";

### Exercício 7
a) SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
b) SELECT AVG(rating) FROM Movie;
c) SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
d) SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
e) SELECT MAX(rating) FROM Movie;
f) SELECT MIN(rating) FROM Movie;

### Exercício 7
a) SELECT * FROM Movie ORDER BY title;
b) SELECT * FROM Movie ORDER BY title LIMIT 5;
c) SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;
d) SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
