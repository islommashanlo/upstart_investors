class CompaniesController < ApplicationController
    
    def create
        new_comp = Company.create(company_params)
        render json: new_comp
    end

    def index
        companies = Company.all
        render json: companies
    end

    def show
        company = Company.find(params[:id])
        render json: company
    end

    def update
        user = User.find(company_params[:user_id].to_i)
        comp = Company.find(params[:id])
        ams = company_params[:money_raised].to_f
        if user.investment_fund >= ams
            new_fund = user.investment_fund - ams
            new_ams = comp.money_raised + ams
            user.update(investment_fund: new_fund)
            new_c = comp.update(money_raised: new_ams)
            InvestorCompany.create(user_id: user.id, company_id: comp.id, amount_pledged: ams)
            render json: comp
        else
            render json: "Error Updating"
        end
    end

    private

    def company_params
        params.require(:company).permit(:name, :money_raised, :info, :user_id, :logo)
    end
end
