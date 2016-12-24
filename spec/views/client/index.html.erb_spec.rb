require 'rails_helper'

RSpec.describe "client/index.html.erb", type: :view do
  it 'should have the root container element' do
    render
    expect(rendered).to eq '<div id="root"></div>'
  end
end
