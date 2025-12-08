-- Cria o banco de dados 
create database copa_mundo;

use copa_mundo;


-- Cria a tabela 'selecoes' com 3 colegas
create table selecoes (
id int auto_increment primary key, -- ID unico que aumenta automaticamente
selecao varchar (100) not null, -- Nome da selecao,texto até 100 caracteres
grupo char (1) not null        -- Grupo da selecao, apenas1 letra (A,B,C)
);


select * from selecoes;

-- Insere várias selecoes de uma vez na tabela
insert into selecoes (selecao,grupo) values
('Brasil','A'),
('França','B'),
('Ilhas Salomão','C'),
('Nigéria','D'),
('Nova zelândia','E'),
('Japão','C');

select * from selecoes;