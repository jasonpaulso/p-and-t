# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.paths << Rails.root.join("vendor","assets","bower_components","animate.css")
Rails.application.config.assets.paths << Rails.root.join("vendor","assets","bower_components","bootstrap-sass-official", "assets", "stylesheets")
Rails.application.config.assets.paths << Rails.root.join("vendor","assets","bower_components","bootstrap-sass-official", "assets","fonts")
# Rails.application.config.assets.paths << Rails.root.join("vendor","assets","bower_components","bootstrap-sass-official", "assets","fonts", "bootstrap")
Rails.application.config.assets.paths << Rails.root.join("vendor","assets","bower_components","bootstrap-sass-official", "assets", "javascripts")
Rails.application.config.assets.paths << Rails.root.join("public")
# Rails.application.config.assets.paths << Rails.root.join("vendor","assets","bower_components","bootstrap-sass-official", "assets","fonts")
# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
