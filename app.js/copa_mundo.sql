-- Cria o banco de dados 
create database copa_mundo;

use copa_mundo;

-- Cria a tabela 'selecoes' com 3 colunas
create table selecoes (
	id int auto_increment primary key, -- ID único que aumenta automaticamente
    selecao varchar(100) not null, -- Nome da seleção, texto até 100 caracteres
    grupo char(1) not null        -- Grupo da seleção, apenas 1 letra (A, B, C)
);

select * from selecoes;

-- Insere várias seleções de uma vez na tabela
insert into selecoes (selecao, grupo) values 
	('Brasil', 'A'),
    ('França', 'B'),
    ('Ilhas Salomão', 'C'),
    ('Nigéria', 'D'),
    ('Nova Zelândia', 'E'),
    ('Japão', 'C');
    
    select * from selecoes;