class CompanySerializer < ActiveModel::Serializer
attributes :id, :name, :money_raised, :info, :users, :industries

end