/* Bundle: page_splitApps___294859f8f14bcb56d062965da404b335_m */"use strict"; angular.module("pageTemplateApp", []).run(['$templateCache', function($templateCache) { $templateCache.put("user-status", "<div class=header-userstatus><div class=\"text header-userstatus-text\" ng-hide=profileHeaderLayout.statusFormShown><span id=userStatusText class=text-overflow ng-class=\"{'userstatus-editable':profileHeaderLayout.mayUpdateStatus}\" ng-bind=profileHeaderLayout.statusText|statusfilter ng-click=revealStatusForm() ng-cloak></span></div><div class=form-horizontal id=statusForm role=form ng-cloak ng-show=profileHeaderLayout.mayUpdateStatus&amp;&amp;profileHeaderLayout.statusFormShown ng-class=\"{'form-has-error':profileHeaderLayout.hasError}\"><div class=form-group ng-if=appMeta.isI18nEnabled><input class=\"form-control input-field\" id=txtStatusMessage maxlength={{profileHeaderLayout.editStatusMaxLength}} ng-cloak placeholder=\"{{'Message.ChangeStatus'|translate}}\" ng-model=profileHeaderLayout.statusTextInput status-input-element key-press-enter=updateStatus(true) key-press-escape=blurStatusForm($event)></div><div class=form-group ng-if=!appMeta.isI18nEnabled><input class=\"form-control input-field\" id=txtStatusMessage maxlength={{profileHeaderLayout.editStatusMaxLength}} ng-cloak placeholder=\"What are you up to?\" ng-model=profileHeaderLayout.statusTextInput status-input-element key-press-enter=updateStatus(true) key-press-escape=blurStatusForm($event)></div><button class=\"btn-fixed-width btn-control-xs header-userstatus-share-button\" ng-if=appMeta.isI18nEnabled ng-click=updateStatus(true) ng-hide=profileHeaderLayout.statusFormSending ng-bind=\"'Action.Save'|translate\"></button> <button class=\"btn-fixed-width btn-control-xs header-userstatus-share-button\" ng-if=!appMeta.isI18nEnabled ng-click=updateStatus(true) ng-hide=profileHeaderLayout.statusFormSending>Save</button> <span ng-if=appMeta.isI18nEnabled><span class=\"spinner spinner-sm header-userstatus-share-progress\" id=loadingImage ng-show=profileHeaderLayout.statusFormSending title=\"{{'Message.Sharing'|translate}}\"></span></span> <span ng-if=!appMeta.isI18nEnabled><span class=\"spinner spinner-sm header-userstatus-share-progress\" id=loadingImage ng-show=profileHeaderLayout.statusFormSending title=Sharing...></span></span></div></div>");$templateCache.put("system-feedback", "<div class=alert-system-feedback><div class=\"alert alert-warning\"></div></div>");$templateCache.put("profile-collections-section", "<ul class=\"hlist collections-list item-list\" ng-init=getCollectionsData()><li class=\"list-item asset-item collections-item\" ng-repeat=\"item in collections\"><a ng-href={{item.AssetSeoUrl}} class=collections-link title={{item.Name}}><div class=img-container><img class=asset-thumb-container lazy-img={{item.Thumbnail.Url}} thumbnail=item.Thumbnail reset-src=true image-retry><div class=asset-restriction-icon><span ng-show=item.AssetRestrictionIcon&amp;&amp;item.AssetRestrictionIcon.CssTag class=icon-label ng-class=\"'icon-'+item.AssetRestrictionIcon.CssTag+'-label'\"></span></div></div><span class=\"text-overflow item-name\">{{item.Name}}</span></a></ul>");$templateCache.put("profile-groups-section", "<div ng-controller=profileGroupController ng-class=\"{'section':!layout.isGridOn,'container-list':layout.isGridOn}\" ng-show=\"groups.length>0\" ng-init=getGroupsData()><div class=container-header><h3 ng-if=appMeta.isI18nEnabled ng-bind=\"'Heading.Groups'|translate\"></h3><h3 ng-if=!appMeta.isI18nEnabled>Groups</h3><div ng-cloak class=container-buttons ng-if=appMeta.isI18nEnabled><button class=profile-view-selector title=\"{{'Action.SlideshowView'|translate}}\" type=button ng-click=updateDisplay(false) ng-class=\"{'btn-secondary-xs btn-generic-slideshow-xs':!layout.isGridOn,'btn-control-xs btn-generic-slideshow-xs':layout.isGridOn}\"><span class=icon-slideshow ng-class=\"{'selected':!layout.isGridOn}\"></span></button> <button class=profile-view-selector title=\"{{'Action.GridView'|translate}}\" type=button ng-click=updateDisplay(true) ng-class=\"{'btn-secondary-xs btn-generic-grid-xs':layout.isGridOn,'btn-control-xs btn-generic-grid-xs':!layout.isGridOn}\"><span class=icon-grid ng-class=\"{'selected':layout.isGridOn}\"></span></button></div><div ng-cloak class=container-buttons ng-if=!appMeta.isI18nEnabled><button class=profile-view-selector title=\"Slideshow View\" type=button ng-click=updateDisplay(false) ng-class=\"{'btn-secondary-xs btn-generic-slideshow-xs':!layout.isGridOn,'btn-control-xs btn-generic-slideshow-xs':layout.isGridOn}\"><span class=icon-slideshow ng-class=\"{'selected':!layout.isGridOn}\"></span></button> <button class=profile-view-selector title=\"Grid View\" type=button ng-click=updateDisplay(true) ng-class=\"{'btn-secondary-xs btn-generic-grid-xs':layout.isGridOn,'btn-control-xs btn-generic-grid-xs':!layout.isGridOn}\"><span class=icon-grid ng-class=\"{'selected':layout.isGridOn}\"></span></button></div></div><div class=profile-slide-container><div ng-show=layout.isGridOn><ul class=\"hlist game-cards group-list\" horizontal-scroll-bar=loadMoreGroups()><li class=\"list-item group-container\" ng-repeat=\"item in groups\" ng-class=\"{'shown':$index&lt;layout.visibleItems}\"><div group-card item=item is-i18n-enabled=appMeta.isI18nEnabled></div></ul><a ng-cloak ng-click=loadMoreGroups() class=\"btn btn-control-xs load-more-button\" ng-if=appMeta.isI18nEnabled ng-bind=\"'Heading.Groups'|translate\" ng-show=\"groups.length>layout.visibleItems\"></a> <a ng-cloak ng-click=loadMoreGroups() class=\"btn btn-control-xs load-more-button\" ng-if=!appMeta.isI18nEnabled ng-show=\"groups.length>layout.visibleItems\">Load More</a></div><div id=groups-switcher class=\"switcher slide-switcher groups\" slide-switcher collection=groups is-i18n-enabled=appMeta.isI18nEnabled ng-hide=layout.isGridOn></div></div></div>");$templateCache.put("group-card", "<div class=game-card><a ng-href={{groupItem.GroupUrl}} class=\"card-item game-card-container\"><div class=game-card-thumb-container><img class=\"game-card-thumb card-thumb\" lazy-img={{groupItem.Emblem.Url}} thumbnail=groupItem.Emblem reset-src=true image-retry></div><div class=\"text-overflow game-card-name\" title={{groupItem.Name}}>{{groupItem.Name}}</div><div class=\"text-overflow game-card-name-secondary\">{{groupItem.Members|abbreviate}} <span ng-pluralize count=groupItem.Members when=\"{'1': 'Member', 'other': 'Members'}\"></span></div><div class=\"text-overflow game-card-name-secondary\">{{groupItem.Rank}}</div></a></div>");$templateCache.put("slide-switcher", "<ul class=\"slide-items-container switcher-items hlist\"><li class=\"switcher-item slide-item-container\" ng-repeat=\"item in collection\" ng-show=shouldPreLoad($index) ng-class=\"{'active':curIdx===$index}\"><div class=\"col-sm-6 slide-item-container-left\"><div class=slide-item-emblem-container><a ng-href={{item.GroupUrl}}><img class=slide-item-image lazy-img={{item.Emblem.Url}} thumbnail=item.Emblem reset-src=true image-retry alt={{item.Name}}></a></div></div><div class=\"col-sm-6 text-overflow slide-item-container-right groups\"><div class=slide-item-info><h2 class=\"slide-item-name groups\">{{item.Name}}</h2><p class=\"text-description slide-item-description groups\">{{item.Description}}</div><div class=slide-item-stats><ul class=hlist><li class=list-item><div class=\"text-label slide-item-stat-title\" ng-if=isI18nEnabled ng-bind=\"'Label.Members'|translate\"></div><div class=\"text-label slide-item-stat-title\" ng-if=!isI18nEnabled>Members</div><div class=\"text-lead slide-item-members-count\">{{item.Members|abbreviate}}</div><li class=list-item><div class=\"text-label slide-item-stat-title\" ng-if=isI18nEnabled ng-bind=\"'Label.Rank'|translate\"></div><div class=\"text-label slide-item-stat-title\" ng-if=!isI18nEnabled>Rank</div><div class=\"text-lead text-overflow slide-item-my-rank groups\">{{item.Rank}}</div></ul></div></div></ul><a class=\"carousel-control left\" ng-if=\"collection.length>1\" ng-click=slidePrev()><span class=icon-carousel-left></span></a> <a class=\"carousel-control right\" ng-if=\"collection.length>1\" ng-click=slideNext()><span class=icon-carousel-right></span></a>");$templateCache.put("profile-player-assets", "<div class=container-header><h3>{{layout.title}}</h3><a ng-href={{layout.assetUrl}} ng-show=layout.showSeeAllButton ng-if=appMeta.isI18nEnabled ng-bind=\"'Action.SeeAll'|translate\" class=\"btn-fixed-width btn-secondary-xs btn-more\"></a> <a ng-href={{layout.assetUrl}} ng-show=layout.showSeeAllButton ng-if=!appMeta.isI18nEnabled class=\"btn-fixed-width btn-secondary-xs btn-more\">See All</a></div><div class=\"section-content remove-panel\"><ul class=\"hlist item-list\"><li class=\"list-item asset-item\" ng-repeat=\"item in assets\"><a ng-href={{item.AssetSeoUrl}} title={{item.Name}}><img class=asset-thumb-container lazy-img={{item.Thumbnail.Url}} thumbnail=item.Thumbnail reset-src=true image-retry> <span class=\"text-overflow item-name\">{{item.Name}}</span></a></ul></div>");$templateCache.put("verify-email", "<div class=modal-header><button type=button class=close ng-click=$dismiss()><span aria-hidden=true><span class=icon-close></span></span><span class=sr-only ng-bind=layout.labels.close></span></button><h4 ng-bind=layout.headerText></h4></div><div class=modal-body><div ng-class=\"{'form-has-error form-has-feedback':layout.error}\"><div ng-bind=layout.labels.unverifiedEmailInstructions></div><p class=form-control-label ng-bind=layout.error></div></div><div class=modal-footer><div toggle-loading is-loading=layout.isSubmitBusy><button type=submit class=\"btn-secondary-md btn-full-width\" ng-click=sendVerificationEmail() ng-show=!layout.emailSent ng-bind=layout.labels.sendVerificationEmail></button> <button type=submit class=\"btn-fixed-width btn-control-md\" ng-click=$dismiss() ng-show=layout.emailSent ng-bind=layout.labels.ok></button><div ng-show=layout.emailSent class=resend-email-container><span ng-bind=layout.labels.didntReceiveIt></span> <span ng-click=sendVerificationEmail() class=\"text-link resend-email-link\" ng-bind=layout.labels.resendEmail></span></div></div></div>");$templateCache.put("login-form", "<system-feedback ng-if=$ctrl.params.IncludeMessageBanner banner-text=$ctrl.bannerErrorMessage show-error-banner=$ctrl.showErrorBanner> </system-feedback><div class=login-form-container><form class=login-form role=form name=loginForm rbx-form-context context={{$ctrl.params.Context}}><div class=\"form-group username-form-group\"><input id=login-username name=username type=text class=\"form-control input-field\" placeholder={{$ctrl.getCredentialPlaceholder()}} ng-model=$ctrl.credentialValue ng-keypress=$ctrl.clearError() rbx-form-interaction></div><div class=\"form-group password-form-group\"><input id=login-password name=password type=password class=\"form-control input-field\" placeholder=\"{{'Label.Password'|translate}}\" ng-model=$ctrl.password key-press-enter=$ctrl.submit(true) ng-keypress=$ctrl.clearError() rbx-form-interaction><p class=\"form-control-label xsmall text-error login-error\" ng-bind=$ctrl.error></div><div toggle-loading is-loading=$ctrl.isProcessing><button id=login-button class=\"btn-full-width login-button\" ng-class=\"$ctrl.usePrimaryButtonClass?'btn-primary-md':'btn-secondary-md'\" ng-bind=\"'Action.LogInCapitalized'|translate\" ng-click=$ctrl.submit(true)></button></div><div class=\"text-center forgot-credentials-link\"><a id=forgot-credentials-link class=text-link href={{$ctrl.data.forgotCredentialsUrl}} ng-bind=\"'Action.ForgotPasswordOrUsernameQuestionCapitalized'|translate\"></a></div></form><div ng-if=$ctrl.params.IsFacebookSignInEnabled><div class=fb-divider-container><div class=\"rbx-divider fb-divider\"></div><div class=divider-text-container><span class=\"divider-text xsmall\" ng-bind=\"'Label.LoginWithYour'|translate\"></span></div></div><button id=facebook-login-button ng-if=!$ctrl.params.UseFacebookRedirect class=\"btn-full-width btn-control-md fb-button social-login\" data-rbx-provider=facebook><span class=fb-icon></span> <span ng-bind=\"'Action.Facebook'|translate\"></span></button> <button id=facebook-login-button ng-if=$ctrl.params.UseFacebookRedirect class=\"btn-full-width btn-control-md fb-button\" ng-click=$ctrl.loginWithFb()><span class=fb-icon></span> <span ng-bind=\"'Action.Facebook'|translate\"></span></button></div></div><div captcha captcha-model=$ctrl.captchaSetting captcha-type=$ctrl.captchaSetting.captchaType on-captcha-success=$ctrl.captchaSetting.successCB on-captcha-error=$ctrl.captchaSetting.errorCB></div><div ng-if=$ctrl.params.SamlRequest><form method=post name=$ctrl.samlRequestForm><input name=RelayState value={{$ctrl.params.SamlRelayState}} type=hidden> <input name=SAMLRequest value={{$ctrl.params.SamlRequest}} type=hidden></form></div>"); }]);