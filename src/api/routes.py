"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Blogger
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200


#First GET method, Done
@api.route('/user', methods=['GET'])
def get_users():

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))

    return jsonify(
        all_users
    ), 200


#Get user by email
@api.route('/user/<id>', methods=['GET'])
def get_specific_user(id):

    user_query = User.query.get(id)

    return jsonify(
        user_query.serialize()
    ), 200


@api.route('/user', methods=['POST'])
def add_new_user():

    body = request.get_json()

    new_user = User(
        user_type=body["user_type"], 
        full_name=body["full_name"], 
        email=body["email"], 
        password=body["password"], 
        phone=body["phone"],
        address=body["address"],
    )

    db.session.add(new_user)
    db.session.commit()

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))
    return jsonify(all_users), 200


#User Login (can be used as valid login just in case)
@api.route('/login', methods=['POST'])
def user_login():

    body = request.get_json()

    user = User.query.filter_by(email = body["email"], password = body["password"]).first()

    if user == None:
        return "email or password is incorrect", 400
    return jsonify(
        user.serialize()
    ), 200


#Adding a new Blogger
@api.route('/blogger', methods=['POST'])
def add_blogger():

    body = request.get_json()

    new_blogger = Blogger(
        game_name=body["game_name"], 
        select_console=body["select_console"], 
        year=body["year"], 
        rating=body["rating"], 
        blog_post=body["blog_post"],
        user_id=body["user_id"]
    )

    db.session.add(new_blogger)
    db.session.commit()

    blogger_query = Blogger.query.all()
    all_bloggers = list(map(lambda x: x.serialize(), blogger_query))
    return jsonify(all_bloggers), 200



#List of Bloggers based on user id
@api.route('/blogger/user/<user_id>', methods=['GET'])
def get_blogger(user_id):

    blogger_query = Blogger.query.filter_by(user_id=user_id)
    all_bloggers = list(map(lambda x: x.serialize(), blogger_query))

    return jsonify(
        all_bloggers
    ), 200







#Change user info
@api.route('/user/<id>', methods=['PUT'])
def change_profile(id):
    
    my_profile = User.query.get(id)

    body = request.get_json()

    my_profile.full_name = body["full_name"]
    my_profile.email = body["email"]
    my_profile.phone = body["phone"]
    my_profile.address = body["address"]

    db.session.commit()

    profile_query = User.query.get(id)

    if profile_query.full_name == body["full_name"]:
        return jsonify(profile_query.serialize()), 200
    return "Update Failed"


#Delete blogger
@api.route('/blogger/<id>', methods=['DELETE'])
def delete_blogger(id):

    body = request.get_json()
    
    blogger =  Blogger.query.get(id)

    db.session.delete(blogger)
    db.session.commit()

    blogger_query = Blogger.query.all()
    all_bloggers = list(map(lambda x: x.serialize(), blogger_query))
    return jsonify(all_bloggers), 200