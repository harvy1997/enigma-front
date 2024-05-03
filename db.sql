Create table tipo_usuario(
	id_tipo_usuario			SERIAL PRIMARY KEY,
	nombre					varchar(100)
);
Create table usuario(
	id_usuario 				SERIAL PRIMARY KEY,
	identificacion			varchar(10) UNIQUE NOT NULL,
	nombre 					varchar(100) NOT NULL,
	tipo_usuario			integer references tipo_usuario(id_tipo_usuario)
);

create table libro(
	id_libro				Serial PRIMARY KEY,
	isbn					varchar(10) UNIQUE NOT NULL,
	nombre					varchar(50) NOT NULL
);
create table prestamo(
	id_prestamo				SERIAL PRIMARY KEY,
	fecha_inicio			timestamp NOT NULL ,
	fecha_fin				timestamp NOT NULL ,
	fecha_entrega			timestamp ,
	libro					integer references libro(id_libro),
	usuario					integer references usuario(id_usuario)
);

insert into tipo_usuario(nombre)
values ('usuario afiliado'),('usuario empleado de la biblioteca'), ('usuario invitado')

insert into usuario(identificacion,nombre,tipo_usuario)
values 
('af12345678','Juan bernardo',1),
('af56781234','Sam bernardo',1),
('emp1234567','Tomy Willipen',2),
('emp4567123','Zac Willipen',2),
('inv1234567','Harry Potter',3),
('inv5671234','Henna Potter',3)

insert into libro(isbn,nombre)
values 
('abc123', 'El Señor de los Anillos'),
('def456', 'Cien años de soledad'),
('ghi789', '1984'),
('jkl012', 'Harry Potter'),
('mno345', 'Don Quijote de la Mancha'),
('pqr678', 'Crimen y castigo'),
('stu901', 'Orgullo y prejuicio'),
('vwx234', 'El Principito'),
('yz567', 'Moby Dick'),
('123abc', 'La Odisea');