Vagrant::Config.run do |config|
  config.vm.box = "precise64"
  config.vm.share_folder "salt-root", "/srv", "./salt/root"

  config.vm.provision :salt do |salt|
    salt.minion_config = "salt/minion"
    salt.run_highstate = true
  end
end
