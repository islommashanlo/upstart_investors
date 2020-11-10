class User < ApplicationRecord
#-Self-Joining-Table---------------------------------------------------------------------------------------------------
    has_many :active_relationships, class_name: "Relationship", foreign_key: :follower_id, dependent: :destroy
    has_many :followeds, through: :active_relationships, source: :followed
    has_many :passive_relationships, class_name: "Relationship", foreign_key: :followed_id, dependent: :destroy
    has_many :followers, through: :passive_relationships, source: :follower
#-Relations------------------------------------------------------------------------------------------------------------
    has_many :user_companies
    has_many :comments
    has_many :user_investors
    has_many :investor_companies
    has_many :companies, through: :user_companies, dependent: :destroy
    has_many :invested_companies, through: :investor_companies, source: :company
    has_many :posts, class_name: "Post", foreign_key: "poster_id"
#----------------------------------------------------------------------------------------------------------------------
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    has_one_attached :avatar
end
