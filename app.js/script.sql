-- Cria o banco de dados onde vamos trabalhar
create database sistema_produtos;

use sistema_produtos;

-- Cria a tabela 'produtos' com algumas colunas básicas
create table produtos (
	id int auto_increment primary key, -- ID ÚNICO
    nome varchar(100) not null, -- Nome produto
    email varchar(120) not null, -- Email (exemplo genérico)
    telefone varchar(20), -- Telefone
    cpf varchar(14), -- Cpf
    endereco varchar(150) -- Endereco simples
);

-- Insere dois registro
insert into produtos (nome, email, telefone, cpf, endereco) values
	('Eduardo Ramos', 'edu.ramos@orutos.com', '1245454-777', '454.545.454.55', 'Rua Orutos F'),
    ('Juliana Clara', 'juliana@orutos.com', '45454545-745', '754.988.977-75', 'Rua Orutos');

-- Seleciona o registro onde o id = 1
select * from produtos where id = 2;

select * from produtos;

-- Deleta o registro onde o id = 1
delete from produtos where id = 1;

select * from produtos;

-- Insere mais um registro
insert into produtos (nome, email, telefone, cpf, endereco) values
	('Rodrigo Campos', 'rodrigos@rodrigo.com.br', '4444444', '6666-666', 'Orutos Campos');

delete from produtos where id = 6;
    
select * from produtos;

-- Atualiza o nome onde o id for 5
update produtos 
set nome = 'Zezé Campos Dev'
where id = 5;

select * from produtos;