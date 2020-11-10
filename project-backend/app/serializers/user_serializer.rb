class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :investor, :investment_fund, :first_name, :last_name, :occupation, :education, :info,
    :companies, :invested_companies, :posts, :comments, :followers, :followeds, :active_relationships, :passive_relationships,
    :pledged_investors, :pledges, :avatar

    def pledged_investors
        is = self.object.companies.map{|e|e.investors}.flatten
        ps = self.object.companies.map{|e|e.investor_companies}.flatten
        arrs = []
        is.each do |e|
            arrs.push({"investor": e, "companies": self.object.companies.select{|s| e.investor_companies.map{|p|p.company_id }.any?(s.id) },
            "pledges": e.investor_companies
            })
        end
        arrs
    end

    def pledges
        self.object.companies.map{|e|e.investors}.flatten.map{|p|p.investor_companies}.flatten
    end
end
