create table user
(
    uid          binary(16)   not null
        primary key,
    email        varchar(50)  not null,
    full_name    varchar(255) not null,
    password     varchar(255) not null,
    phn_number   varchar(10)  not null,
    reset_token  varchar(255) null,
    constraint UK_ob8kqyqqgmefl0aco34akdtpe
        unique (email)
);

INSERT INTO KothaBhada.user (uid, email, full_name, password, phn_number, reset_token) VALUES (0x02ACE168EA14499E90CA20C43359050F, 'sandabgc26@gmail.com', 'Sandab GC', '$2a$10$mBE9WI8ea3ILToZn5Y873eKKJBfrGHeoBF1p.LEp995U/nIcg.tgu', '9812345678', null);
INSERT INTO KothaBhada.user (uid, email, full_name, password, phn_number, reset_token) VALUES (0x47364D152511494BA163575DBEA2BBF0, 'saugat@gmail.com', 'Saugat Shrestha', '$2a$10$fg7fH8zWVL.anJpSda9.n.osYdHYSa0bFaRevkXF8.FoGJtofr5/G', '9812345678', null);
INSERT INTO KothaBhada.user (uid, email, full_name, password, phn_number, reset_token) VALUES (0x74C6C6D7CEF34EF5951168DD916C2F17, 'abhiyan@gmail.com', 'Abhiyan Rimal', '$2a$10$du/cFjjZtoCNTDU3cZ0eT.LrCsv74dKbpwuXo0YOzGq28/gcU8lsq', '9812345678', null);
INSERT INTO KothaBhada.user (uid, email, full_name, password, phn_number, reset_token) VALUES (0x9850D3FAEBFE481294E01C5A084DF56E, 'sandab@gmail.com', 'Sandab GC', '$2a$10$3PPq5gUSE0u7tkxzdtdzZ.g5TT8Yn31SWOWfGBZDyNGqIYHpYg0xe', '9860815608', null);
INSERT INTO KothaBhada.user (uid, email, full_name, password, phn_number, reset_token) VALUES (0x988601B03E3E498E92D16D6421EDFE1E, 'sam@gmail.com', 'sam', '$2a$10$1uzjR8Vj1ZlysICnN1thYetdICQ8Na0vvlXtI.1x6HK4efNMlLDlO', '1234567890', null);
