function txtCommand1(){
document.open();
document.write('SHOW DATABASES;');
document.close();
}

function txtCommand2(){
document.open();
document.write('CREATE DATABASE `nazwa`;');
document.close();
}

function txtCommand3(){
document.open();
document.write('USE `nazwa`;');
document.close();
}

function txtCommand4(){
document.open();
document.write('SHOW TABLES;');
document.close();
}

function txtCommand5(){
document.open();
document.write('CREATE TABLE `nazwa` (`nazwakolumny` VARCHAR(30), `nazwakolumny` INT(2));');
document.close();
}

function txtCommand6(){
document.open();
document.write('INSERT INTO `nazwa` (`nazwakolumny`,`nazwakolumny`) VALUES (&apos;coś&apos;,&apos;coś&apos;);');
document.close();
}

function txtCommand7(){
document.open();
document.write('SELECT *( albo `nazwakolumny`) FROM `nazwa`;');
document.close();
}

function txtCommand8(){
document.open();
document.write('UPDATE `nazwa` SET `nazwakolumny`=5 WHERE `nazwakolumny`=&apos;coś&apos;;');
document.close();
}

function txtCommand9(){
document.open();
document.write('DELETE FROM `nazwa` WHERE `nazwatabeli`=&apos;coś&apos;;');
document.close();
}

function txtCommand10(){
document.open();
document.write('DROP TABLE `nazwa`;');
document.close();
}


    
