--@block
DROP DATABASE if EXISTS blog_data;
--@block
CREATE DATABASE blog_data;
--@block
USE blog_data;
--@block
DROP TABLE IF EXISTS users;
--@block
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    country VARCHAR(255),
    created_at DATETIME DEFAULT NOW(),
    email VARCHAR(255) NOT NULL UNIQUE,
    pass VARCHAR(255)
);
--@block
DROP TABLE IF EXISTS blogs;
--@block
CREATE TABLE blogs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    blog TEXT NOT NULL,
    snippet VARCHAR(255),
    title VARCHAR(255),
    time_created DATETIME DEFAULT NOW(),
    blog_id INT NOT NULL,
    FOREIGN KEY(blog_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);
--@block
INSERT INTO users(username, country, email, pass)
VALUES(
        -- 'allan sich',
        -- 'kenya',
        -- 'me@gmail.com',
        -- 'ssis'
        'jksfjd',
        'kenya',
        'mesdd@gmail.com',
        'ssdsis'
    );
--@block
INSERT INTO blogs(blog_id, snippet, blog, title)
VALUES(
        'wewewewew',
        'jhgkytyhkgvyuvivviytfkvkvtvi',
        'end'
    );
--@block
SELECT *
FROM users;
--@block
select *
FROM blogs