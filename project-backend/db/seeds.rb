# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Users
User.create(username: "isa", password: "123", first_name: "Isa", last_name: "Solaris", education: "CUNY Baruch College", occupation: "Financial Reporting Analyst", info: "Founder of Upstart Investors")

#Companies
Company.create(name: "UpStart Investor", money_raised: 0, info: "Founded in 2020 by Isa")

10.times do 
    User.create(username: Faker::Name.first_name , password: "123", first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , education: Faker::University.name, occupation: Faker::Job.title, info: Faker::Books::Lovecraft.sentence, investor: true, investment_fund: 1000000)
end

10.times do 
    User.create(username: Faker::Name.first_name , password: "123", first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , education: Faker::University.name, occupation: Faker::Job.title, info: Faker::Books::Lovecraft.sentence)
end

Industry.create(name: "Unknown")
Industry.create(name: "Health & Wellness")
Industry.create(name: "Accounting & Finance")
Industry.create(name: "Data Storage & Security")
Industry.create(name: "Customer Relationship Management")
Industry.create(name: "Travel")
Industry.create(name: "Application & Data Integration")
Industry.create(name: "Supply Chain Management & Logistics")
Industry.create(name: "Food & Groceries")
Industry.create(name: "Web Development")
Industry.create(name: "Lighting & LED")
Industry.create(name: "Infrastructure & Hosting")
Industry.create(name: "Collaboration & Project Management")
Industry.create(name: "HR & Workforce Management")
Industry.create(name: "Data & Broadband")
Industry.create(name: "Music")
Industry.create(name: "Real Estate")
Industry.create(name: "IT Solutions & Software Development")
Industry.create(name: "eCommerce")
Industry.create(name: "Marketplace")
Industry.create(name: "News & Discussion")
Industry.create(name: "Application Development")
Industry.create(name: "Education & Training")
Industry.create(name: "Payments")
Industry.create(name: "Business Intelligence, Analytics & Performance Management")
Industry.create(name: "Advertising, Sales & Marketing")
Industry.create(name: "Social Media")


10.times do 
    c = Company.create(name: Faker::Games::WarhammerFantasy.unique.faction, money_raised: 0, info: Faker::Games::WarhammerFantasy.unique.quote)
    CompanyIndustry.create(company_id: c.id, industry_id: rand(28))
end


10.times do
    Post.create(title: Faker::Book.title, content: Faker::Quote.famous_last_words, poster_id: 1, postee_id: 2)
end

UserCompany.create(user_id: 1, company_id: 1)
UserCompany.create(user_id: 1, company_id: 2)
UserCompany.create(user_id: 1, company_id: 3)
UserCompany.create(user_id: 1, company_id: 4)
UserCompany.create(user_id: 1, company_id: 5)
UserCompany.create(user_id: 1, company_id: 6)
UserCompany.create(user_id: 11, company_id: 7)
UserCompany.create(user_id: 12, company_id: 8)
UserCompany.create(user_id: 13, company_id: 9)
UserCompany.create(user_id: 14, company_id: 10)

Relationship.create(follower_id: 2, followed_id: 1)
Relationship.create(follower_id: 3, followed_id: 1)
Relationship.create(follower_id: 4, followed_id: 1)
Relationship.create(follower_id: 11, followed_id: 1)
Relationship.create(follower_id: 12, followed_id: 1)
Relationship.create(follower_id: 13, followed_id: 1)
Relationship.create(follower_id: 14, followed_id: 1)
Relationship.create(follower_id: 15, followed_id: 1)


Relationship.create(followed_id: 2, follower_id: 1)
Relationship.create(followed_id: 3, follower_id: 1)
Relationship.create(followed_id: 4, follower_id: 1)
Relationship.create(followed_id: 5, follower_id: 1)
Relationship.create(followed_id: 11, follower_id: 1)
Relationship.create(followed_id: 12, follower_id: 1)
Relationship.create(followed_id: 13, follower_id: 1)
Relationship.create(followed_id: 14, follower_id: 1)

InvestorCompany.create(user_id: 2, company_id: 1, amount_pledged: 1000000)
InvestorCompany.create(user_id: 3, company_id: 2, amount_pledged: 1000000)
InvestorCompany.create(user_id: 4, company_id: 3, amount_pledged: 1000000)
InvestorCompany.create(user_id: 5, company_id: 4, amount_pledged: 1000000)
InvestorCompany.create(user_id: 6, company_id: 5, amount_pledged: 1000000)
InvestorCompany.create(user_id: 7, company_id: 6, amount_pledged: 1000000)
InvestorCompany.create(user_id: 8, company_id: 1, amount_pledged: 1000000)