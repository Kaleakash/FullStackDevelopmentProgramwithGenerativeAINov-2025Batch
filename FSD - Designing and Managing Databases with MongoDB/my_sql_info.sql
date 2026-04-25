use mydb;
show tables;
select * from employee;

select max(salary) from employee where department_id=60;
select first_name from employee where salary > 9000;

select first_name from employee where salary in (select salary from employee where department_id=60)

select first_name from employee where salary in (select salary from employee where department_id=60)
and department_id != 60;

select first_name,salary from employee where salary >any (select salary from employee where department_id=60);
select first_name,salary from employee where salary >all (select salary from employee where department_id=60);

select first_name from employee where exists (select * from department where department_id=1000);

select first_name from employee where exists (select * from department where department_id=100);


create view employee_view1
as 
select * from employee;


select * from employee_view1;

create view employee_view2
as 
select first_name,salary from employee;


select * from employee_view2;

create view emp_dept_view 
as
select e.first_name,e.salary,d.department_name from employee e inner join department d on e.department_id=d.department_id;


select * from emp_dept_view;

select * from emp;

create view emp4_view
as 
select * from emp;
select * from emp;
select * from emp4_view;
insert into emp4_view values(102,'Raj',35000,'Clerk');
insert into emp values(103,'Ravi',32000,'HR');

commit;

select * from emp;
start transaction;
-- failure transaction 
delete from emp where id=100;
update emp set salary = 5000 where id=101;
insert into emp values(110,'Mahesh',34000,'Manager');
rollback;

commit;







