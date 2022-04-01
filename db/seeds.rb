# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
# ActiveRecord::Base.connection.tables.each do |t|
#   ActiveRecord::Base.connection.reset_pk_sequence!(t)
# end #this resets the id

demoUser = User.create!(username: 'demoUser', email: 'demoUser@gmail.com', password: 'demoUser')
user1 = User.create!(username: 'coolGuy77', email: 'coolguy@gmail.com', password: 'coolguy87')
user2 = User.create!(username: 'samantha', email: 'samantha@gmail.com', password: 'samantha')

post1 = Post.create!(title: 'so true', creator_id: demoUser.id)
post1.photo.attach(io: File.open("/Users/RasBoss/desktop/spongebob_meme.png"), filename: "spongebob_meme.png")

post2 = Post.create!(title: "nicee", creator_id: user1.id)
post2.photo.attach(io: File.open("/Users/RasBoss/desktop/cool_clouds.jpg"), filename: "cool_clouds.jpg")

post3 = Post.create!(title: 'lol', creator_id: user2.id)
post3.photo.attach(io: File.open("/Users/RasBoss/desktop/ww3_meme.jpg"), filename: "ww3_meme.jpg")

post4 = Post.create!(title: "chill cat", creator_id: demoUser.id)
post4.photo.attach(io: File.open("/Users/RasBoss/desktop/cool_cat.jpg"), filename: "cool_cat.jpg")

post5 = Post.create!(title: "wanna sprite!", creator_id: user2.id)
post5.photo.attach(io: File.open("/Users/RasBoss/desktop/lebron_meme.jpg"), filename: "lebron_meme.jpg")

post6 = Post.create!(title: "tree in winter", creator_id: user2.id)
post6.photo.attach(io: File.open("/Users/RasBoss/desktop/winter_tree.jpg"), filename: "winter_tree.jpg")

post7 = Post.create!(title: "how do you feel about daylight savings?", creator_id: user1.id)
post7.photo.attach(io: File.open("/Users/RasBoss/desktop/daylight_saving_meme.jpeg"), filename: "daylight_saving_meme.jpeg")

post8 = Post.create!(title: "Lauterbrunnen, Switzerland", creator_id: user2.id)
post8.photo.attach(io: File.open("/Users/RasBoss/desktop/switzerland_pic.png"), filename: "switzerland_pic.png")

post9 = Post.create!(title: "beach in thailand!!", creator_id: user1.id)
post9.photo.attach(io: File.open("/Users/RasBoss/desktop/thailand_beach.jpg"), filename: "thailand_beach.jpg")

post10 = Post.create!(title: "check out the stu", creator_id: demoUser.id)
post10.photo.attach(io: File.open("/Users/RasBoss/desktop/home_studio.jpg"), filename: "home_studio.jpg")

post11 = Post.create!(title: "happy national puppers day", creator_id: demoUser.id)
post11.photo.attach(io: File.open("/Users/RasBoss/desktop/doggo_pic.jpg"), filename: "doggo_pic.jpg")

post12 = Post.create!(title: "jellyfish", creator_id: user1.id)
post12.photo.attach(io: File.open("/Users/RasBoss/desktop/jellyfish.jpg"), filename: "jellyfish.jpg") 

post13 = Post.create!(title: "wish I couldn't relate", creator_id: user1.id)
post13.photo.attach(io: File.open("/Users/RasBoss/desktop/covid_meme.jpg"), filename: "covid_meme.jpg")

post14 = Post.create!(title: "dope", creator_id: user2.id)
post14.photo.attach(io: File.open("/Users/RasBoss/desktop/vintage_car.jpg"), filename: "vintage_car.jpg")

post15 = Post.create!(title: 'pain', creator_id: user1.id)
post15.photo.attach(io: File.open("/Users/RasBoss/desktop/elmo_meme.jpg"), filename: "elmo_meme.jpg")


