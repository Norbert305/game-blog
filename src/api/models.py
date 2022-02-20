from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #Request Body Data
    user_type = db.Column(db.String(120), nullable=True)
    full_name = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=True)
    phone = db.Column(db.String(120), unique=False, nullable=True)
    address = db.Column(db.String(120), nullable=True)

    #Relationships
    blogger = db.relationship('Blogger', backref='user')

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "user_type": self.user_type,
            "email": self.email,
            "full_name": self.full_name,
            "phone": self.phone,
            "address": self.address,
            "blogger": [blogger.serialize() for blogger in self.blogger]
            # do not serialize the password, its a security breach
        }


class Blogger(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #Request Body Data
    game_name = db.Column(db.String(80), unique=False, nullable=True)
    select_console = db.Column(db.String(80), unique=False, nullable=True)
    year = db.Column(db.String(80), unique=False, nullable=True)
    rating = db.Column(db.String(80), unique=False, nullable=True)
    blog_post = db.Column(db.String(500), unique=False, nullable=True)
    
    #Foreign Keys
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=True)

    def __repr__(self):
        return '<Blogger %r>' % self.game_name # add more representations



    def serialize(self):
        return {
            "id": self.id,
            "game_name": self.game_name,
            "select_console": self.select_console,
            "year": self.year,
            "rating": self.rating,
            "blog_post": self.blog_post,
            "user_id": self.user_id,
        }