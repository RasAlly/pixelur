# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

demoUser = User.create!(username: 'demoUser', email: 'demoUser@gmail.com', password: 'demoUser')
user1 = User.create!(username: 'coolGuy77', email: 'coolguy@gmail.com', password: 'coolguy87')
user2 = User.create!(username: 'samantha', email: 'samantha@gmail.com', password: 'samantha')

post1 = Post.create!(title: 'so true', creator_id: demoUser.id)
post1.photo.attach(io: File.open("/Users/RasBoss/desktop/spongebob_meme.png"), filename: "spongebob_meme.png")

post2 = Post.create!(title: 'pain', creator_id: user1.id)
post2.photo.attach(io: File.open("/Users/RasBoss/desktop/elmo_meme.jpg"), filename: "elmo_meme.jpg")

post3 = Post.create!(title: 'lol', creator_id: user2.id)
post3.photo.attach(io: File.open("/Users/RasBoss/desktop/ww3_meme.jpg"), filename: "ww3_meme.jpg")

post4 = Post.create!(title: "wish I couldn't relate", creator_id: user1.id)
post4.photo.attach(io: File.open("/Users/RasBoss/desktop/covid_meme.jpg"), filename: "covid_meme.jpg")

post5 = Post.create!(title: "wanna sprite!", creator_id: user2.id)
post5.photo.attach(io: File.open("/Users/RasBoss/desktop/lebron_meme.jpg"), filename: "lebron_meme.jpg")

post6 = Post.create!(title: "happy national puppers day", creator_id: demoUser.id)
post6.photo.attach(io: File.open("/Users/RasBoss/desktop/doggo_pic.jpg"), filename: "doggo_pic.jpg")

post7 = Post.create!(title: "how do you feel about daylight savings?", creator_id: user1.id)
post7.photo.attach(io: File.open("/Users/RasBoss/desktop/daylight_saving_meme.jpeg"), filename: "daylight_saving_meme.jpeg")

post8 = Post.create!(title: "Lauterbrunnen, Switzerland", creator_id: user2.id)
post8.photo.attach(io: File.open("/Users/RasBoss/desktop/switzerland_pic.png"), filename: "switzerland_pic.png")



