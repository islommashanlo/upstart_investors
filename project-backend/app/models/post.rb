class Post < ApplicationRecord
    belongs_to :user, class_name: "User", foreign_key: "poster_id"
    has_many :comments
end
