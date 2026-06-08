CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    registration_date DATE
);
CREATE TABLE news (
    news_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    submission_date DATE,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE predictions (
    prediction_id SERIAL PRIMARY KEY,
    news_id INT UNIQUE,
    prediction_result VARCHAR(20),
    confidence_score FLOAT,
    prediction_date DATE,
    FOREIGN KEY (news_id) REFERENCES news(news_id)
);
CREATE TABLE admin (
    admin_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);