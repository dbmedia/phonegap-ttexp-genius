"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ttexp/adapters/application', ['exports', 'ember-data', 'ttexp/config/environment', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberData, _ttexpConfigEnvironment, _emberSimpleAuthMixinsDataAdapterMixin) {
	exports['default'] = _emberData['default'].JSONAPIAdapter.extend(_emberSimpleAuthMixinsDataAdapterMixin['default'], {
		host: _ttexpConfigEnvironment['default'].APP.serverApiUrl,
		authorizer: 'authorizer:oauth2'
	});
});
define('ttexp/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'ttexp/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _ttexpConfigEnvironment) {

	var App;

	_ember['default'].MODEL_FACTORY_INJECTIONS = true;

	App = _ember['default'].Application.extend({
		modulePrefix: _ttexpConfigEnvironment['default'].modulePrefix,
		podModulePrefix: _ttexpConfigEnvironment['default'].podModulePrefix,
		Resolver: _emberResolver['default'],

		LOG_TRANSITIONS: true,
		LOG_TRANSITIONS_INTERNAL: true
	});

	(0, _emberLoadInitializers['default'])(App, _ttexpConfigEnvironment['default'].modulePrefix);

	exports['default'] = App;
});
define('ttexp/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant', 'ttexp/config/environment'], function (exports, _emberSimpleAuthAuthenticatorsOauth2PasswordGrant, _ttexpConfigEnvironment) {
	exports['default'] = _emberSimpleAuthAuthenticatorsOauth2PasswordGrant['default'].extend({
		serverTokenEndpoint: _ttexpConfigEnvironment['default'].APP.serverApiUrl + '/access_token',

		makeRequest: function makeRequest(url, data) {
			data.client_id = 'ttexp';
			data.client_secret = 'public';
			return this._super(url, data);
		}
	});
});
define('ttexp/authorizers/oauth2', ['exports', 'ember-simple-auth/authorizers/oauth2-bearer'], function (exports, _emberSimpleAuthAuthorizersOauth2Bearer) {
  exports['default'] = _emberSimpleAuthAuthorizersOauth2Bearer['default'].extend();
});
define('ttexp/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('ttexp/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('ttexp/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('ttexp/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  exports['default'] = _emberBootstrapComponentsBsButtonGroup['default'];
});
define('ttexp/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  exports['default'] = _emberBootstrapComponentsBsButton['default'];
});
define('ttexp/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('ttexp/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('ttexp/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('ttexp/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('ttexp/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('ttexp/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('ttexp/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('ttexp/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('ttexp/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, _emberBootstrapComponentsBsInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsInput['default'];
    }
  });
});
define('ttexp/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, _emberBootstrapComponentsBsModalBackdrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBackdrop['default'];
    }
  });
});
define('ttexp/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('ttexp/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('ttexp/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('ttexp/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('ttexp/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('ttexp/components/bs-nav-item', ['exports', 'ember-bootstrap/components/bs-nav-item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('ttexp/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('ttexp/components/bs-navbar-content', ['exports', 'ember-bootstrap/components/bs-navbar-content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('ttexp/components/bs-navbar-nav', ['exports', 'ember-bootstrap/components/bs-navbar-nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('ttexp/components/bs-navbar-toggle', ['exports', 'ember-bootstrap/components/bs-navbar-toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('ttexp/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('ttexp/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('ttexp/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('ttexp/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, _emberBootstrapComponentsBsSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsSelect['default'];
    }
  });
});
define('ttexp/components/bs-tab-pane', ['exports', 'ember-bootstrap/components/bs-tab-pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('ttexp/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('ttexp/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, _emberBootstrapComponentsBsTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTextarea['default'];
    }
  });
});
define('ttexp/components/cdv-nav-bar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'header'
  });
});
define('ttexp/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('ttexp/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('ttexp/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('ttexp/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('ttexp/components/notification-container', ['exports', 'ember-cli-notifications/components/notification-container'], function (exports, _emberCliNotificationsComponentsNotificationContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliNotificationsComponentsNotificationContainer['default'];
    }
  });
});
define('ttexp/components/notification-message', ['exports', 'ember-cli-notifications/components/notification-message', 'ttexp/config/environment'], function (exports, _emberCliNotificationsComponentsNotificationMessage, _ttexpConfigEnvironment) {

  var config = _ttexpConfigEnvironment['default']['ember-cli-notifications'] || {};

  exports['default'] = _emberCliNotificationsComponentsNotificationMessage['default'].extend({
    icons: config.icons || 'font-awesome'
  });
});
define('ttexp/controllers/action', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),
    currentUser: _ember['default'].inject.service('current-user')
  });
});
define('ttexp/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ttexp/controllers/help', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),
    currentUser: _ember['default'].inject.service('current-user')
  });
});
define('ttexp/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),
    currentUser: _ember['default'].inject.service('current-user'),
    actions: {
      closeApp: function closeApp() {
        if (confirm("Vuoi davvero uscire dall'applicazione?")) {
          navigator.app.exitApp();
        }
      },
      invalidateSession: function invalidateSession() {
        this.get('session').invalidate();
      }
    }
  });

  /*
  document.addEventListener("deviceready", onDeviceReady, true);
  function onDeviceReady() {
    alert('device ready!!!');
  }
  */

  /*
  function exitFromApp() {
    navigator.app.exitApp();
  }
  */
});
define('ttexp/controllers/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),

    actions: {
      authenticate: function authenticate() {
        var _this = this;

        var _getProperties = this.getProperties('identification', 'password');

        var identification = _getProperties.identification;
        var password = _getProperties.password;

        this.get('session').authenticate('authenticator:oauth2', identification, password)['catch'](function (reason) {
          _this.set('errorMessage', reason.error_description || reason.error || reason);
        });
      }
    }
  });
});
define('ttexp/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ttexp/controllers/page-not-found', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('ttexp/controllers/play', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),
    currentUser: _ember['default'].inject.service('current-user'),

    actions: {
      // TODO: i controller sono deprecati, usare piuttosto un plugin come questo: https://github.com/IvyApp/ivy-videojs
      videoEnded: function videoEnded() {
        console.log("videoEnded()");
        _ember['default'].$("#side-chat").removeClass("minimized");
      }
    }
  });
});
define('ttexp/controllers/scenarios', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),
    currentUser: _ember['default'].inject.service('current-user'),
    fileSystem: _ember['default'].inject.service('file-system'),
    notifications: _ember['default'].inject.service('notification-messages'),
    showDownloadModal: false,
    downloadModalTitle: '',
    downloadSession: 0,

    actions: {
      closeApp: function closeApp() {
        if (confirm("Vuoi davvero uscire dall'applicazione?")) {
          navigator.app.exitApp();
        }
      },
      invalidateSession: function invalidateSession() {
        this.get('session').invalidate();
      },
      closeDownloadModal: function closeDownloadModal() {
        var downloadSession = this.get('downloadSession') + 1;
        this.set('downloadSession', downloadSession);
        console.log("Closing, download session set to: " + downloadSession);
      }
    }
  });
});
define('ttexp/controllers/scores', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),
    currentUser: _ember['default'].inject.service('current-user')
  });
});
define('ttexp/helpers/add', ['exports', 'ember-math-helpers/helpers/add'], function (exports, _emberMathHelpersHelpersAdd) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAdd['default'];
    }
  });
  Object.defineProperty(exports, 'add', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAdd.add;
    }
  });
});
define('ttexp/helpers/app-version', ['exports', 'ember', 'ttexp/config/environment'], function (exports, _ember, _ttexpConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _ttexpConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('ttexp/helpers/await', ['exports', 'ember-promise-helpers/helpers/await'], function (exports, _emberPromiseHelpersHelpersAwait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersAwait['default'];
    }
  });
  Object.defineProperty(exports, 'await', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersAwait.await;
    }
  });
});
define('ttexp/helpers/breaklines', ['exports', 'ember'], function (exports, _ember) {
  exports.breaklines = breaklines;

  function breaklines(text /*, hash*/) {
    text = _ember['default'].Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/, '<br>');
    return _ember['default'].String.htmlSafe(text);
  }

  exports['default'] = _ember['default'].Helper.helper(breaklines);
});
define('ttexp/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('ttexp/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('ttexp/helpers/bs-not', ['exports', 'ember-bootstrap/helpers/bs-not'], function (exports, _emberBootstrapHelpersBsNot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsNot['default'];
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsNot.not;
    }
  });
});
define('ttexp/helpers/bs-read-path', ['exports', 'ember-bootstrap/helpers/bs-read-path'], function (exports, _emberBootstrapHelpersBsReadPath) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsReadPath['default'];
    }
  });
  Object.defineProperty(exports, 'readPath', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsReadPath.readPath;
    }
  });
});
define('ttexp/helpers/ceil', ['exports', 'ember-math-helpers/helpers/ceil'], function (exports, _emberMathHelpersHelpersCeil) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersCeil['default'];
    }
  });
  Object.defineProperty(exports, 'ceil', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersCeil.ceil;
    }
  });
});
define('ttexp/helpers/div', ['exports', 'ember-math-helpers/helpers/div'], function (exports, _emberMathHelpersHelpersDiv) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersDiv['default'];
    }
  });
  Object.defineProperty(exports, 'div', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersDiv.div;
    }
  });
});
define('ttexp/helpers/floor', ['exports', 'ember-math-helpers/helpers/floor'], function (exports, _emberMathHelpersHelpersFloor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersFloor['default'];
    }
  });
  Object.defineProperty(exports, 'floor', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersFloor.floor;
    }
  });
});
define('ttexp/helpers/is-fulfilled', ['exports', 'ember-promise-helpers/helpers/is-fulfilled'], function (exports, _emberPromiseHelpersHelpersIsFulfilled) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsFulfilled['default'];
    }
  });
  Object.defineProperty(exports, 'isFulfilled', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsFulfilled.isFulfilled;
    }
  });
});
define('ttexp/helpers/is-pending', ['exports', 'ember-promise-helpers/helpers/is-pending'], function (exports, _emberPromiseHelpersHelpersIsPending) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsPending['default'];
    }
  });
  Object.defineProperty(exports, 'isPending', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsPending.isPending;
    }
  });
});
define('ttexp/helpers/is-rejected', ['exports', 'ember-promise-helpers/helpers/is-rejected'], function (exports, _emberPromiseHelpersHelpersIsRejected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsRejected['default'];
    }
  });
  Object.defineProperty(exports, 'isRejected', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersIsRejected.isRejected;
    }
  });
});
define('ttexp/helpers/lookup-module-styles', ['exports', 'ember-css-modules/helpers/lookup-module-styles'], function (exports, _emberCssModulesHelpersLookupModuleStyles) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssModulesHelpersLookupModuleStyles['default'];
    }
  });
  Object.defineProperty(exports, 'lookupModuleStyles', {
    enumerable: true,
    get: function get() {
      return _emberCssModulesHelpersLookupModuleStyles.lookupModuleStyles;
    }
  });
});
define('ttexp/helpers/max', ['exports', 'ember-math-helpers/helpers/max'], function (exports, _emberMathHelpersHelpersMax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMax['default'];
    }
  });
  Object.defineProperty(exports, 'max', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMax.max;
    }
  });
});
define('ttexp/helpers/min', ['exports', 'ember-math-helpers/helpers/min'], function (exports, _emberMathHelpersHelpersMin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMin['default'];
    }
  });
  Object.defineProperty(exports, 'min', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMin.min;
    }
  });
});
define('ttexp/helpers/mod', ['exports', 'ember-math-helpers/helpers/mod'], function (exports, _emberMathHelpersHelpersMod) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMod['default'];
    }
  });
  Object.defineProperty(exports, 'mod', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMod.mod;
    }
  });
});
define('ttexp/helpers/mult', ['exports', 'ember-math-helpers/helpers/mult'], function (exports, _emberMathHelpersHelpersMult) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMult['default'];
    }
  });
  Object.defineProperty(exports, 'mult', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMult.mult;
    }
  });
});
define('ttexp/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ttexp/helpers/pow', ['exports', 'ember-math-helpers/helpers/pow'], function (exports, _emberMathHelpersHelpersPow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersPow['default'];
    }
  });
  Object.defineProperty(exports, 'pow', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersPow.pow;
    }
  });
});
define('ttexp/helpers/promise-rejected-reason', ['exports', 'ember-promise-helpers/helpers/promise-rejected-reason'], function (exports, _emberPromiseHelpersHelpersPromiseRejectedReason) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseHelpersHelpersPromiseRejectedReason['default'];
    }
  });
});
define('ttexp/helpers/round', ['exports', 'ember-math-helpers/helpers/round'], function (exports, _emberMathHelpersHelpersRound) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersRound['default'];
    }
  });
  Object.defineProperty(exports, 'round', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersRound.round;
    }
  });
});
define('ttexp/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ttexp/helpers/sqrt', ['exports', 'ember-math-helpers/helpers/sqrt'], function (exports, _emberMathHelpersHelpersSqrt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSqrt['default'];
    }
  });
  Object.defineProperty(exports, 'sqrt', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSqrt.sqrt;
    }
  });
});
define('ttexp/helpers/sub', ['exports', 'ember-math-helpers/helpers/sub'], function (exports, _emberMathHelpersHelpersSub) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSub['default'];
    }
  });
  Object.defineProperty(exports, 'sub', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSub.sub;
    }
  });
});
define('ttexp/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ttexp/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _ttexpConfigEnvironment) {
  var _config$APP = _ttexpConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('ttexp/initializers/bootstrap-linkto', ['exports', 'ember-bootstrap/initializers/bootstrap-linkto'], function (exports, _emberBootstrapInitializersBootstrapLinkto) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapInitializersBootstrapLinkto['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapInitializersBootstrapLinkto.initialize;
    }
  });
});
define('ttexp/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define("ttexp/initializers/cordova", ["exports"], function (exports) {
	exports.initialize = initialize;
	// https://github.com/poetic/ember-cli-cordova/issues/153
	// http://stackoverflow.com/questions/30790605/ember-2-0-cordova-and-ondeviceready
	// http://incorrectcode.news/question/35240/how-to-fire-deviceready-event-in-chrome-browser-trying-to-debug-phonegap-project/
	// https://gist.github.com/htulipe/44d899e56e2526a82e46

	function initialize(application) {
		// application.inject('route', 'foo', 'service:foo');

		//if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
		if (window.cordova) {
			application.deferReadiness();
			document.addEventListener("deviceready", function () {
				console.log("DEVICE READY FIRED");
				application.advanceReadiness();

				/*
    // Spostare in una variabile globale
    // http://w3foverflow.com/question/get-controller-var-from-run-schedule/
    Ember.$(function() {
    	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
    	    Ember.$('.showIOS').show();
    	}
    	if (1 || navigator.userAgent.match(/Android/i)){
    	    Ember.$('.showAndroid').show();
    	}
    });
    */

				//			cordova.plugins.Keyboard.disableScroll(true);
				//			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				//			window.addEventListener('native.keyboardshow', keyboardShowHandler);
				//			window.addEventListener('native.keyboardhide', keyboardHideHandler);

				//			StatusBar.backgroundColorByHexString('#ffffff');
				//			StatusBar.overlaysWebView(false);
				//			StatusBar.styleDefault();
				//			StatusBar.show();
			}, false);
		}
	}

	exports["default"] = {
		name: 'cordova',
		initialize: initialize
	};
});
define('ttexp/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ttexp/initializers/ember-css-modules', ['exports', 'ember-css-modules/initializers/ember-css-modules'], function (exports, _emberCssModulesInitializersEmberCssModules) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssModulesInitializersEmberCssModules['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCssModulesInitializersEmberCssModules.initialize;
    }
  });
});
define('ttexp/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ttexp/initializers/ember-simple-auth', ['exports', 'ember', 'ttexp/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _ember, _ttexpConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(registry) {
      var config = _ttexpConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _ttexpConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('ttexp/initializers/export-application-global', ['exports', 'ember', 'ttexp/config/environment'], function (exports, _ember, _ttexpConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_ttexpConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _ttexpConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_ttexpConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ttexp/initializers/in-app-livereload', ['exports', 'ttexp/config/environment', 'ember-cli-cordova/initializers/in-app-livereload'], function (exports, _ttexpConfigEnvironment, _emberCliCordovaInitializersInAppLivereload) {

  var inAppReload = _emberCliCordovaInitializersInAppLivereload['default'].initialize;

  var initialize = function initialize(container, app) {
    if (typeof cordova === 'undefined' || _ttexpConfigEnvironment['default'].environment !== 'development' || _ttexpConfigEnvironment['default'].cordova && (!_ttexpConfigEnvironment['default'].cordova.liveReload || !_ttexpConfigEnvironment['default'].cordova.liveReload.enabled)) {
      return;
    }

    return inAppReload(container, app, _ttexpConfigEnvironment['default']);
  };

  exports.initialize = initialize;
  exports['default'] = {
    name: 'cordova:in-app-livereload',
    initialize: initialize
  };
});
/* globals cordova */
define('ttexp/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ttexp/initializers/load-bootstrap-config', ['exports', 'ttexp/config/environment', 'ember-bootstrap/config'], function (exports, _ttexpConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_ttexpConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('ttexp/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, _emberBootstrapInitializersModalsContainer) {
  exports['default'] = _emberBootstrapInitializersModalsContainer['default'];
});
define('ttexp/initializers/notifications', ['exports', 'ember', 'ember-cli-notifications/services/notification-messages-service'], function (exports, _ember, _emberCliNotificationsServicesNotificationMessagesService) {
    exports['default'] = {
        name: 'notification-messages-service',

        initialize: function initialize() {
            var application = arguments[1] || arguments[0];
            if (_ember['default'].Service) {
                application.register('service:notification-messages', _emberCliNotificationsServicesNotificationMessagesService['default']);
                application.inject('component:notification-container', 'notifications', 'service:notification-messages');
                application.inject('component:notification-message', 'notifications', 'service:notification-messages');
                return;
            }
            application.register('notification-messages:service', _emberCliNotificationsServicesNotificationMessagesService['default']);

            ['controller', 'component', 'route', 'router', 'service'].forEach(function (injectionTarget) {
                application.inject(injectionTarget, 'notifications', 'notification-messages:service');
            });
        }
    };
});
define('ttexp/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('ttexp/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("ttexp/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ttexp/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('ttexp/models/action', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    playthrough: _emberData['default'].belongsTo('playthrough'),
    tank: _emberData['default'].belongsTo('tank'),
    item: _emberData['default'].belongsTo('item')
  });
});
define('ttexp/models/item', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    action: _emberData['default'].hasMany('action'),
    text: _emberData['default'].attr('string')
  });
});
define('ttexp/models/manifesto', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    scenario: _emberData['default'].belongsTo('scenario'),

    version: _emberData['default'].attr('string'),
    filesCount: _emberData['default'].attr('number')
  });
});
//import Ember from 'ember';
define('ttexp/models/media-file', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    video: _emberData['default'].belongsTo('video'),

    fileName: _emberData['default'].attr('string'),
    size: _emberData['default'].attr('number'),
    md5: _emberData['default'].attr('string')
  });
});
//import Ember from 'ember';
define('ttexp/models/play-state', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    scenario: _emberData['default'].belongsTo('scenario'),
    playthrough: _emberData['default'].belongsTo('playthrough'),
    video: _emberData['default'].belongsTo('video'),
    prevVideo: _emberData['default'].belongsTo('video'),

    stepsCount: _emberData['default'].attr('number'),

    gameCompleted: _ember['default'].computed('scenario', 'playthrough', 'video', function () {
      var playthrough = this.get('playthrough');
      var video = this.get('video');
      if (video.get('closing') || playthrough.get('completedAt')) {
        return true;
      } else {
        return false;
      }
    })
  });
});
define('ttexp/models/playthrough', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    user: _emberData['default'].belongsTo('user'),
    scenario: _emberData['default'].belongsTo('scenario'),
    action: _emberData['default'].hasMany('action'),
    playState: _emberData['default'].belongsTo('playState'),
    scores: _emberData['default'].hasMany('score'),

    success: _emberData['default'].attr('boolean'),
    hint: _emberData['default'].attr('string'),
    startedAt: _emberData['default'].attr('date'),
    completedAt: _emberData['default'].attr('date')
  });
});
define('ttexp/models/scenario', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  var getOwner = _ember['default'].getOwner;
  var service = _ember['default'].inject.service;
  var RSVP = _ember['default'].RSVP;
  exports['default'] = _emberData['default'].Model.extend({
    code: _emberData['default'].attr('string'),
    name: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    attempts: _emberData['default'].attr('number'),
    rating: _emberData['default'].attr('number'),
    version: _emberData['default'].attr('number'),
    filesHost: _emberData['default'].attr('string'),
    filesDir: _emberData['default'].attr('string'),
    enabled: _emberData['default'].attr('boolean', { defaultValue: true }),
    requiredPlays: _emberData['default'].attr('number'),
    showHints: _emberData['default'].attr('boolean', { defaultValue: true }),
    defaultHintSuccess: _emberData['default'].attr('string'),
    defaultHintFail: _emberData['default'].attr('string'),

    playthroughs: _emberData['default'].hasMany('playthrough'),
    playState: _emberData['default'].belongsTo('playState'),
    manifesto: _emberData['default'].belongsTo('manifesto'),
    mediaFiles: _emberData['default'].hasMany('mediaFile'),

    //.volatile();

    localVersion: _ember['default'].computed({
      get: function get(key) {
        console.log("Entered scenario.localVersion()");
        var self = this;

        return new RSVP.Promise(function (resolve, reject) {
          console.log("scenario.localVersion() promise start");
          var fileSystemService = getOwner(self).lookup('controller:scenarios').get('fileSystem');
          var pgFileSystemUtil = fileSystemService.get('pgFileSystemUtil');

          fileSystemService.getScenarioVersion(self.id).then(function (localVersion) {
            resolve(localVersion);
          }, function (reason) {
            console.log("Error getting scenario version");
            console.log(reason);
            reject(reason);
          });
        });
      },
      set: function set(key, value) {
        console.log("Setting scenario localVersion to " + value);
        //      this.set('isUpta', value / 2);
        return new RSVP.Promise(function (resolve, reject) {
          resolve(value);
        });
      }

    }),
    isUpdated: _ember['default'].computed('version', 'localVersion', {
      get: function get(key) {
        console.log("Entered scenario.isUpdated()");
        var self = this;
        return new RSVP.Promise(function (resolve, reject) {
          if (window.cordova || true) {
            var scenarioVersion = self.get('version');

            self.get('localVersion').then(function (localVersion) {
              console.log("localVersion for scenario " + self.id + ":" + localVersion);
              if (localVersion === scenarioVersion) {
                resolve(true);
              } else {
                resolve(false);
              }
            }, function (reason) {
              console.log("Error checking scenario.localVersion");
              console.log(reason);
              reject(reason);
            });
          } else {
            resolve(true);
          }
        });
      }
    })
  });
});
define('ttexp/models/score', ['exports', 'ember-data'], function (exports, _emberData) {
  //import Ember from "ember";

  exports['default'] = _emberData['default'].Model.extend({
    playthrough: _emberData['default'].belongsTo('playthrough'),

    value: _emberData['default'].attr('number'),
    percent: _emberData['default'].attr('number'),
    vote: _emberData['default'].attr('string'),
    voteClass: _emberData['default'].attr('string'),
    minValue: _emberData['default'].attr('number'),
    maxValue: _emberData['default'].attr('number'),
    variableId: _emberData['default'].attr('string'),
    variableCode: _emberData['default'].attr('string'),
    variableName: _emberData['default'].attr('string')

  });
});
define('ttexp/models/setting', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    key: _emberData['default'].attr('string'),
    value: _emberData['default'].attr('string')
  });
});
define('ttexp/models/tank', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    action: _emberData['default'].hasMany('action')
  });
});
define('ttexp/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    username: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string'),
    firstName: _emberData['default'].attr('string'),
    middleName: _emberData['default'].attr('string'),
    lastName: _emberData['default'].attr('string'),
    fullName: _emberData['default'].attr('string'),
    playthroughs: _emberData['default'].hasMany('playthrough')
  });
});
define('ttexp/models/video', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    uniqueCode: _emberData['default'].attr('string'),
    scenarioCode: _emberData['default'].attr('string'),
    transcript: _emberData['default'].attr('string'),
    closing: _emberData['default'].attr('boolean'),

    items: _emberData['default'].hasMany('item'),
    playState: _emberData['default'].belongsTo('playState', { inverse: 'video' }),
    mediaFile: _emberData['default'].belongsTo('mediaFile'),

    fullPath: _ember['default'].computed('uniqueCode', 'scenarioCode', function () {
      //    return 'assets/media/video/480/'+this.get('scenarioCode').toLowerCase()+'/'+this.get('uniqueCode')+'.mp4';
      return "480/" + this.get('scenarioCode').toLowerCase() + '/' + this.get('uniqueCode') + '.mp4';
    })
  });
});
define('ttexp/router', ['exports', 'ember', 'ttexp/config/environment'], function (exports, _ember, _ttexpConfigEnvironment) {

	var Router = _ember['default'].Router.extend({
		location: _ttexpConfigEnvironment['default'].locationType
	});

	Router.map(function () {
		this.route('index', { path: '/' });
		this.route('scenarios', { path: '/scenarios' });
		this.route('login', { path: '/login' });
		this.route('help');
		this.route('play', { path: '/play/:scenario_id' });
		this.route('scores', { path: '/scores/:playthrough_id' });
		this.route('page-not-found', { path: '/*wildcard' });
	});

	exports['default'] = Router;

	_ember['default'].Route.reopen({
		activate: function activate() {
			var cssClass = this.toCssClass();
			if (cssClass !== "application") {
				_ember['default'].$('body').addClass(cssClass);
			}
			_ember['default'].$('#main-menu a[data-page-route="' + this.routeName + '"]').addClass('active');
		},
		deactivate: function deactivate() {
			_ember['default'].$('body').removeClass(this.toCssClass());
		},
		toCssClass: function toCssClass() {
			var pageClass = "page-" + this.routeName.replace(/\./g, '-').dasherize();
			return pageClass;
		}
	});
});
define('ttexp/routes/application', ['exports', 'ember', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsApplicationRouteMixin) {
  var service = _ember['default'].inject.service;
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsApplicationRouteMixin['default'], {
    currentUser: service(),
    fileSystem: service(),

    beforeModel: function beforeModel() {
      //http://hussfelt.net/2015/08/06/how-to-stop-using-deferreadiness-and-advancereadiness-in-ember/
      //return Ember.RSVP.all([this.get('sessionService').setup(), this.get('cordovaService').setup()]);
      return _ember['default'].RSVP.all([this._loadCurrentUser(), this._loadFileSystem()]);
    },

    sessionAuthenticated: function sessionAuthenticated() {
      var _this = this;

      this._super.apply(this, arguments);
      this._loadCurrentUser()['catch'](function () {
        return _this.get('session').invalidate();
      });
    },

    _loadCurrentUser: function _loadCurrentUser() {
      return this.get('currentUser').load();
    },
    _loadFileSystem: function _loadFileSystem() {
      return this.get('fileSystem').load();
    }
  });
});
define("ttexp/routes/help", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("ttexp/routes/index", ["exports", "ember", "ember-simple-auth/mixins/authenticated-route-mixin"], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports["default"] = _ember["default"].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin["default"], {});
});

//import ENV from 'ttexp/config/environment';
define("ttexp/routes/page-not-found", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("ttexp/routes/play", ["exports", "ember", "ember-simple-auth/mixins/authenticated-route-mixin"], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  //http://emberigniter.com/real-world-authentication-with-ember-simple-auth/
  exports["default"] = _ember["default"].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin["default"], {
    actionLoading: false,
    model: function model(params) {
      this.set("actionLoading", false);
      return _ember["default"].RSVP.hash({
        scenario: this.store.findRecord('scenario', params.scenario_id, { reload: true })
      });
    },

    actions: {
      clickItem: function clickItem(item) {
        var self = this;
        var model = this.currentModel;
        var scenario = model.scenario;
        var playState = scenario.get('playState');
        if (playState && !self.get("actionLoading")) {
          playState.get('playthrough').then(function (playthrough) {
            if (playthrough) {

              var action = self.store.createRecord('action', {
                playthrough: playthrough,
                item: item
              });

              self.set("actionLoading", true);
              _ember["default"].$('#chat-options li a').addClass('disabled');
              _ember["default"].$('#chat-options li:not([data-item-id=' + item.id + ']) a').fadeTo(200, 0.3);
              _ember["default"].$('#chat-options li[data-item-id=' + item.id + ']').addClass('loading');

              action.save().then(function () {
                if (item) {
                  model.scenario.reload().then(function () {
                    self.set("actionLoading", false);
                    _ember["default"].$("#side-chat").addClass("minimized");
                    self.send('startVideo');
                  });
                } else {
                  self.transitionTo('scenarios');
                }
              }, function (reason) {
                _ember["default"].$('#chat-options li a').removeClass('disabled');
                _ember["default"].$('#chat-options li:not([data-item-id=' + item.id + ']) a').fadeTo(200, 1);
                _ember["default"].$('#chat-options li[data-item-id=' + item.id + ']').removeClass('loading');
                self.set("actionLoading", false);

                self.send('error', reason.errors[0].title);
              });
            }
          });
        }
      },
      // https://www.icanlocalize.com/site/2010/03/using-amazon-s3-to-host-streaming-videos/
      // http://www.inwebson.com/html5/custom-html5-video-controls-with-jquery/ (BUFFERING)
      startVideo: function startVideo() {
        _ember["default"].$("#overlay").hide();
        var url = "";
        var model = this.currentModel;
        var subPath = model.scenario.get('playState').get('video').get('fullPath');
        var videoPlayer = _ember["default"].$("#video-player");
        videoPlayer.hide();

        if (window.cordova && true) {
          url = "cdvfile://localhost/persistent/" + subPath;
          console.log(url);
          resolveLocalFileSystemURL(url, function (entry) {
            var localUrl = entry.toURL();
            console.log("Converted local url: " + localUrl);

            videoPlayer.attr("src", localUrl);
            videoPlayer.get(0).play();
            videoPlayer.show();
          }, function () {
            videoPlayer.attr("src", "");
            //          videoPlayer.trigger('error');
          });
        } else {
            url = "http://d1ceamasw3ytjh.cloudfront.net/" + subPath;
            console.log(url);

            videoPlayer.attr("src", url);
            videoPlayer.get(0).play();
            videoPlayer.show();
          }
      },
      toggleSideChat: function toggleSideChat() {
        _ember["default"].$("#side-chat").toggleClass("minimized");
      },
      showSideChat: function showSideChat() {
        _ember["default"].$("#side-chat").removeClass("minimized");
      },
      hideSideChat: function hideSideChat() {
        _ember["default"].$("#side-chat").addClass("minimized");
      },
      exit: function exit() {
        if (confirm("Vuoi uscire dalla sessione di gioco?")) {
          this.send('clickItem', false);
        }
      },
      error: function error(reason, transition) {
        console.log(reason);
        console.log(transition);
        alert(reason);

        return reason;
      }
    }
  });
});

//import ENV from 'ttexp/config/environment';
define('ttexp/routes/scenarios', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  var getOwner = _ember['default'].getOwner;
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      return _ember['default'].RSVP.hash({
        scenarios: this.store.findAll('scenario', { reload: true })
      });
    },
    actions: {
      play: function play(scenario) {
        var self = this;

        scenario.get('isUpdated').then(function (isUpdated) {
          if (!isUpdated) {
            // Check if version was not already downloaded or is older
            self.send('download', scenario);
          } else {
            self.transitionTo('play', scenario.id);
          }
        }, function (reason) {
          console.log("Error getting scenario.isUpdated");
          console.log(reason);
        });
      },
      downloadAll: function downloadAll(scenarios) {
        var self = this;

        if (confirm("Vuoi scaricare tutti i video degli scenari? Attenzione!!! Si consiglia di effettuare l'operazione da una connessione wi-fi")) {
          var countScenarios = scenarios.get('length');
          console.log("Download all scenarios (" + countScenarios + ")");
          console.log(scenarios);

          var scenariosIds = [];
          scenarios.forEach(function (scenario) {
            scenariosIds.push(scenario.get('id'));
          });

          if (scenariosIds.length) {
            var currentScenarioIndex = 0;
            var downloadScenarioQueue = function downloadScenarioQueue(scenarios, currentScenarioIndex) {
              console.log("downloadScenarioQueue()");
              var scenario = scenarios.objectAt(currentScenarioIndex);
              if (typeof scenario !== "undefined") {
                self.send('download', scenario, true, function () {
                  currentScenarioIndex++;
                  downloadScenarioQueue(scenarios, currentScenarioIndex);
                });
              } else {
                self.controller.set('showDownloadModal', false);
              }
            };
            downloadScenarioQueue(scenarios, currentScenarioIndex);
          }
        }
      },
      download: function download(scenario, keepModalOpen, onComplete) {
        var self = this;
        var fileSystemService = getOwner(self).lookup('controller:scenarios').get('fileSystem');
        var pgFileSystemUtil = fileSystemService.get('pgFileSystemUtil');

        if (scenario) {
          //https://github.com/apache/cordova-plugin-file-transfer/blob/1882bfbd2d150c6db501b2092374d644cb056505/doc/index.md
          //https://github.com/apache/cordova-plugin-file-transfer
          //https://github.com/apache/cordova-plugin-file
          //http://docs.phonegap.com/en/1.8.0/cordova_file_file.md.html#FileTransfer

          this.get('store').findRecord('manifesto', scenario.id, { reload: true }).then(function (manifesto) {
            var scenario = manifesto.get('scenario');
            console.log("DOWNLOAD VIDEOS FOR SCENARIO: " + scenario.get('id'));

            //console.log("CHECK cordova.file");
            //console.log(cordova.file);

            var host = scenario.get('filesHost') + "/";
            var localSource = "cdvfile://localhost/persistent/";
            var dir = scenario.get('filesDir');
            // var uri = encodeURI("http://d1ceamasw3ytjh.cloudfront.net/480/tel/");
            var mediaFiles = scenario.get('mediaFiles');

            var mediaFilesArray = mediaFiles.toArray();
            //console.log(mediaFilesArray);
            console.log(mediaFilesArray.length);

            // TODO: aggiungere controllo, iniziare il download solo se la versione è superiore a quella corrente
            var mediaFileCounter = 0;
            var mediaFileErrors = 0;
            var mediaFileErrorsNames = "";
            var mediaFileLength = mediaFilesArray.length;

            if (mediaFileLength) {
              var downloadSession = self.controller.get('downloadSession');

              //console.log("downloadQueue()");
              var downloadQueue = function downloadQueue() {
                if (downloadSession !== self.controller.get('downloadSession')) {
                  console.log("Abort: download session changed");
                  return false;
                }

                var percentage = Math.round(mediaFileCounter / mediaFileLength * 100);
                _ember['default'].$(".progress-bar").width(percentage + '%');

                var mediaFile = mediaFilesArray[mediaFileCounter];
                if (mediaFile && mediaFileCounter < 2) {
                  var fileName = mediaFile.get('fileName'); //"TEL-I0-T0-A.mp4";
                  var fileRemotePath = host + dir + fileName;
                  var fileLocalPath = localSource + dir + fileName;

                  confirmOrDownloadFile(fileRemotePath, fileLocalPath, function () {
                    // Success
                    mediaFileCounter++;
                    console.log("Files downloaded: " + mediaFileCounter);
                    downloadQueue();
                  }, function () {
                    // Error
                    mediaFileCounter++;
                    mediaFileErrors++;
                    if (mediaFileErrorsNames !== "") {
                      mediaFileErrorsNames += ", ";
                    }
                    mediaFileErrorsNames += fileName;
                    console.log("Error downloading file: " + fileName);
                    downloadQueue();
                  });
                } else {
                  console.log("Download complete!!!");

                  if (mediaFileErrors) {
                    //                  self.controller.get('notifications').warning('Download di '+scenario.get('name')+' completato con '+mediaFileErrors+' error'+(mediaFileErrors > 1 ? 'i' : 'e')+': '+mediaFileErrorsNames, {
                    //                    autoClear: false
                    //                  });
                    self.controller.get('notifications').success('Download di ' + scenario.get('name') + ' completato con successo', {
                      autoClear: true
                    });
                  } else {
                    self.controller.get('notifications').success('Download di ' + scenario.get('name') + ' completato con successo', {
                      autoClear: true
                    });
                  }

                  // Aggiornamento versione interna dello scenario
                  var newVersion = scenario.get('version');
                  scenario.set('localVersion', newVersion);

                  fileSystemService.setScenarioVersion(scenario.get('id'), newVersion).then(function (settings) {
                    console.log("Scenario version set, new settings:");
                    console.log(settings);

                    if (!keepModalOpen) {
                      self.controller.set('showDownloadModal', false);
                    }
                    if (onComplete) {
                      onComplete();
                    }
                  }, function (reason) {
                    console.log("Error setting scenario version");
                    console.log(reason);
                  });
                }
              };

              _ember['default'].$(".progress-bar").width('0%');
              self.controller.set('downloadModalTitle', 'Download scenario: ' + scenario.get('name'));
              self.controller.set('showDownloadModal', true);
              downloadQueue();
            }

            return true;
          });
        }
      },
      error: function error(reason, transition) {
        console.log(reason);
        console.log(transition);
        alert(reason);

        return reason;
      }
    }
  });

  function confirmOrDownloadFile(fileRemotePath, fileLocalPath, onSuccess, onError) {

    console.log("confirmOrDownloadFile(): " + fileRemotePath + " to " + fileLocalPath);
    if (window.cordova) {
      /*
      // TODO: Aggiungere controllo CRC per scaricare solo i file mancanti o modificati
      window.resolveLocalFileSystemURL(fileLocalPath, function(fileEntry) {
        // File already exists
        console.log("resolveLocalFileSystemURL success");
        console.log(fileEntry);
        
      }, function (error) {
        // Download the file
        console.log("resolveLocalFileSystemURL error");
        console.log(error);
        // Download File...
      });
      */

      var fileTransfer = new FileTransfer();
      fileTransfer.download(fileRemotePath, fileLocalPath, function (entry) {
        // Success
        console.log("download complete: " + entry.toURL());
        console.log("internal url: " + entry.toInternalURL());
        if (onSuccess) {
          onSuccess();
        }
      }, function (error) {
        // Error
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("upload error code" + error.code);
        if (onError) {
          onError();
        }
      }, null, // or, pass false
      {});
    } else {
      if (onSuccess) {
        setTimeout(function () {
          onSuccess();
        }, 10);
      }
    }
  }
});

//import ENV from 'ttexp/config/environment';
define('ttexp/routes/scores', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model(params) {
      var playthrough = this.store.findRecord('playthrough', params.playthrough_id, { reload: true });
      return _ember['default'].RSVP.hash({
        'playthrough': playthrough
      });
    },

    setupController: function setupController(controller, model) {
      // TODO: Anzichè usare il setupcontroller passare altrimenti l'id all'action anzichè l'intero modello
      if (model.id) {
        // Passaggio modello da link-to, in alternativa nel link-to passare solo l'id e non tutto il playthrough
        model = { playthrough: model };
      }
      controller.set('model', model);
    }
  });
});

//import ENV from 'ttexp/config/environment';
define('ttexp/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ttexp/services/current-user', ['exports', 'ember'], function (exports, _ember) {
  var service = _ember['default'].inject.service;
  var RSVP = _ember['default'].RSVP;
  exports['default'] = _ember['default'].Service.extend({
    store: service(),
    session: service('session'),

    load: function load() {
      var _this = this;

      return new RSVP.Promise(function (resolve, reject) {
        if (_this.get('session.isAuthenticated')) {
          return _this.get('store').findRecord('user', 'me').then(function (user) {
            _this.set('user', user);
            resolve();
          }, reject);
        } else {
          resolve();
        }
      });
    }
  });
});
//https://github.com/simplabs/ember-simple-auth/blob/master/guides/managing-current-user.md
define('ttexp/services/file-system', ['exports', 'ember', 'ttexp/utils/pg-file-system'], function (exports, _ember, _ttexpUtilsPgFileSystem) {
  var service = _ember['default'].inject.service;
  var RSVP = _ember['default'].RSVP;
  exports['default'] = _ember['default'].Service.extend({
    store: service(),
    settings: {},
    settingsFile: null,
    pgFileSystemUtil: null,

    init: function init() {
      if (!this.get('pgFileSystemUtil')) {
        this.set('pgFileSystemUtil', _ttexpUtilsPgFileSystem['default'].create());
      }
    },
    load: function load() {
      var self = this;
      var pgFileSystemUtil = self.get('pgFileSystemUtil');
      var settings;

      return new RSVP.Promise(function (resolve, reject) {
        if (window.cordova) {
          window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
            console.log('file system open: ' + fs.name);
            fs.root.getFile("settings.json", { create: true, exclusive: false }, function (fileEntry) {
              self.set('settingsFile', fileEntry);
              console.log(fileEntry);

              pgFileSystemUtil.removeFile(fileEntry).then(function () {
                // TODO: Togliere cancellazione settings una volta che funziona tutto

                ///////////////////////////////////////////////

                pgFileSystemUtil.readFile(fileEntry).then(function (settingsData) {
                  if (settingsData === "") {
                    self.set('settings', {});
                  } else {
                    self.set('settings', _ember['default'].$.parseJSON(settingsData));
                  }
                  console.log("Starting settings:");
                  console.log(self.get('settings'));
                  resolve();
                }, function (reason) {
                  console.log("Error reading settings file");
                  console.log(reason);
                  reject(reason);
                });

                ///////////////////////////////////////////////
              }, function (reason) {
                console.log("Error deleting settings file");
                console.log(reason);
                reject(reason);
              });
            }, reject); //onErrorCreateFile
          }, reject); // onErrorLoadFs
        } else {
            //sessionStorage.removeItem('settings');
            settings = sessionStorage.getItem('settings');
            if (!settings) {
              console.log("Settings file settings for first time");
              var settingsData = {
                'pippo': 11223344
              };
              //            'scenarios': {},
              settings = JSON.stringify(settingsData);
              sessionStorage.setItem('settings', settings);
            } else {
              console.log("Existing settings found!!!");
            }
            console.log(settings);

            self.set('settings', _ember['default'].$.parseJSON(settings));
            resolve();
          }
      });
    },

    getScenarioVersion: function getScenarioVersion(scenarioId) {
      console.log("fileSystem.getScenarioVersion()");
      var self = this;
      return new RSVP.Promise(function (resolve, reject) {
        var settings = self.get('settings');

        console.log("Check settings:");
        console.log(settings);
        if (settings) {
          try {
            console.log("=====>ID:" + scenarioId);
            var localVersion = settings.scenarios[scenarioId].version;
            if (localVersion) {
              resolve(localVersion);
            } else {
              resolve(0);
            }
          } catch (err) {
            resolve(-1);
          }
        } else {
          resolve(0);
        }
      });
    },

    setScenarioVersion: function setScenarioVersion(scenarioId, version) {
      console.log("fileSystem.setScenarioVersion()");
      var self = this;
      var settings = self.get('settings');

      var newSettingsData = {
        'scenarios': {}
      };
      newSettingsData.scenarios[scenarioId] = {
        'version': version
      };
      _ember['default'].$.extend(true, settings, newSettingsData);

      return new RSVP.Promise(function (resolve, reject) {
        if (window.cordova) {
          var fileEntry = self.get('settingsFile');

          self.writeFile(fileEntry, JSON.stringify(settings)).then(function (fileContent) {
            resolve(fileContent);
          }, function (reason) {
            console.log("Error writing in settings file");
            console.log(reason);
            reject(reason);
          });
        } else {
          sessionStorage.setItem('settings', JSON.stringify(settings));

          console.log("new settings:");
          console.log(sessionStorage.getItem('settings'));

          resolve(settings);
        }
      });
    }
  });
});
define("ttexp/services/session", ["exports", "ember", "ember-simple-auth/services/session"], function (exports, _ember, _emberSimpleAuthServicesSession) {
  exports["default"] = _emberSimpleAuthServicesSession["default"].extend({

    store: _ember["default"].inject.service()

  });
});

//import DS from 'ember-data';
//  currentUser: Ember.computed('isAuthenticated', function() {
//    if (this.get('isAuthenticated')) {
//      const promise = this.get('store').findRecord('user', 'me');
//      return DS.PromiseObject.create({ promise: promise });
//    }
//  })
define('ttexp/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("ttexp/templates/action", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 13
          }
        },
        "moduleName": "ttexp/templates/action.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("PAGINA ACTION");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 10
          }
        },
        "moduleName": "ttexp/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("\n<nav>\n	{{#link-to \"index\"}}Index{{/link-to}}\n	{{#link-to \"help\"}}Help{{/link-to}}\n	{{#link-to \"play\" \"new\" class=\"btn btn-link\"}}Play{{/link-to}}\n</nav>\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [8, 0], [8, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/cdv-generic-nav-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "ttexp/templates/cdv-generic-nav-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [["element", "bind-attr", [], ["class", ":icon nav.leftButton.icon"], ["loc", [null, [4, 9], [4, 56]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "modifiers",
            "modifiers": ["action"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/cdv-generic-nav-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element3);
          morphs[1] = dom.createMorphAt(element3, 1, 1);
          morphs[2] = dom.createMorphAt(element3, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["leftButton"], [], ["loc", [null, [2, 10], [2, 33]]]], ["block", "if", [["get", "nav.leftButton.icon", ["loc", [null, [3, 10], [3, 29]]]]], [], 0, null, ["loc", [null, [3, 4], [5, 11]]]], ["content", "nav.leftButton.text", ["loc", [null, [6, 4], [6, 27]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/cdv-generic-nav-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "nav.title.text", ["loc", [null, [12, 4], [12, 22]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 4
              },
              "end": {
                "line": 20,
                "column": 4
              }
            },
            "moduleName": "ttexp/templates/cdv-generic-nav-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "bind-attr", [], ["class", ":icon nav.rightButton.icon"], ["loc", [null, [19, 9], [19, 57]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 23,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/cdv-generic-nav-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createMorphAt(element1, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["rightButton"], [], ["loc", [null, [17, 10], [17, 34]]]], ["block", "if", [["get", "nav.rightButton.icon", ["loc", [null, [18, 10], [18, 30]]]]], [], 0, null, ["loc", [null, [18, 4], [20, 11]]]], ["content", "nav.rightButton.text", ["loc", [null, [21, 4], [21, 28]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/cdv-generic-nav-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "nav.leftButton.text", ["loc", [null, [1, 6], [1, 25]]]]], [], 0, null, ["loc", [null, [1, 0], [8, 7]]]], ["block", "if", [["get", "nav.title.text", ["loc", [null, [10, 6], [10, 20]]]]], [], 1, null, ["loc", [null, [10, 0], [14, 7]]]], ["block", "if", [["get", "nav.rightButton.text", ["loc", [null, [16, 6], [16, 26]]]]], [], 2, null, ["loc", [null, [16, 0], [23, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ttexp/templates/components/bs-accordion-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-accordion-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "panel-body");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [10, 8], [10, 17]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/bs-accordion-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "role", "tab");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2, "class", "panel-title");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["panel-heading ", ["subexpr", "if", [["get", "collapsed", ["loc", [null, [1, 68], [1, 77]]]], "collapsed", "expanded"], [], ["loc", [null, [1, 63], [1, 102]]]]]]], ["element", "action", ["toggleActive"], [], ["loc", [null, [1, 16], [1, 41]]]], ["content", "title", ["loc", [null, [4, 12], [4, 21]]]], ["block", "bs-collapse", [], ["collapsed", ["subexpr", "@mut", [["get", "collapsed", ["loc", [null, [8, 25], [8, 34]]]]], [], []], "class", "panel-collapse"], 0, null, ["loc", [null, [8, 0], [12, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/components/bs-alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 0
              }
            },
            "moduleName": "ttexp/templates/components/bs-alert.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "button");
            dom.setAttribute(el1, "class", "close");
            dom.setAttribute(el1, "aria-label", "Close");
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "aria-hidden", "true");
            var el3 = dom.createTextNode("×");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["dismiss"], [], ["loc", [null, [3, 59], [3, 79]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "dismissible", ["loc", [null, [2, 6], [2, 17]]]]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]], ["content", "yield", ["loc", [null, [5, 0], [5, 9]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/bs-alert.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "hidden", ["loc", [null, [1, 10], [1, 16]]]]], [], 0, null, ["loc", [null, [1, 0], [6, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/components/bs-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 37
            }
          },
          "moduleName": "ttexp/templates/components/bs-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "icon", ["loc", [null, [1, 24], [1, 28]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 61
          }
        },
        "moduleName": "ttexp/templates/components/bs-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [1, 6], [1, 10]]]]], [], 0, null, ["loc", [null, [1, 0], [1, 44]]]], ["content", "text", ["loc", [null, [1, 44], [1, 52]]]], ["content", "yield", ["loc", [null, [1, 52], [1, 61]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/components/bs-form-element", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 31
          }
        },
        "moduleName": "ttexp/templates/components/bs-form-element.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "partial", [["get", "formElementTemplate", ["loc", [null, [1, 10], [1, 29]]]]], [], ["loc", [null, [1, 0], [1, 31]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/components/bs-form-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-form-group.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [3, 41], [3, 49]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 7
          }
        },
        "moduleName": "ttexp/templates/components/bs-form-group.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "if", [["get", "hasFeedback", ["loc", [null, [2, 6], [2, 17]]]]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/components/bs-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "ttexp/templates/components/bs-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "ttexp/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-modal-header", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [4, 36], [4, 41]]]]], [], []], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [4, 54], [4, 65]]]]], [], []]], ["loc", [null, [4, 12], [4, 67]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 12
              },
              "end": {
                "line": 9,
                "column": 12
              }
            },
            "moduleName": "ttexp/templates/components/bs-modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "yield", ["loc", [null, [8, 16], [8, 25]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "ttexp/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "bs-modal-body", [], [], 0, null, ["loc", [null, [7, 12], [9, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "ttexp/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [11, 12], [11, 21]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 16,
              "column": 8
            }
          },
          "moduleName": "ttexp/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "bs-modal-footer", ["loc", [null, [15, 12], [15, 31]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "ttexp/templates/components/bs-modal-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-content");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 2, 2);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["modal-dialog ", ["get", "sizeClass", ["loc", [null, [1, 27], [1, 36]]]]]]], ["block", "if", [["get", "header", ["loc", [null, [3, 14], [3, 20]]]]], [], 0, null, ["loc", [null, [3, 8], [5, 15]]]], ["block", "if", [["get", "body", ["loc", [null, [6, 14], [6, 18]]]]], [], 1, 2, ["loc", [null, [6, 8], [12, 15]]]], ["block", "if", [["get", "footer", ["loc", [null, [14, 14], [14, 20]]]]], [], 3, null, ["loc", [null, [14, 8], [16, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("ttexp/templates/components/bs-modal-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [2, 12], [2, 16]]]]], [], ["loc", [null, [2, 4], [2, 18]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 8
                },
                "end": {
                  "line": 5,
                  "column": 66
                }
              },
              "moduleName": "ttexp/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [5, 52], [5, 66]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 8
                },
                "end": {
                  "line": 6,
                  "column": 96
                }
              },
              "moduleName": "ttexp/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "submitTitle", ["loc", [null, [6, 81], [6, 96]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "ttexp/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "default", "action", "close"], 0, null, ["loc", [null, [5, 8], [5, 80]]]], ["block", "bs-button", [], ["type", "primary", "buttonType", "submit", "disabled", ["subexpr", "@mut", [["get", "submitDisabled", ["loc", [null, [6, 65], [6, 79]]]]], [], []]], 1, null, ["loc", [null, [6, 8], [6, 110]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 66
                }
              },
              "moduleName": "ttexp/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [8, 52], [8, 66]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "ttexp/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "primary", "action", "close"], 0, null, ["loc", [null, [8, 8], [8, 80]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasSubmitButton", ["loc", [null, [4, 10], [4, 25]]]]], [], 0, 1, ["loc", [null, [4, 4], [9, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 7
          }
        },
        "moduleName": "ttexp/templates/components/bs-modal-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [10, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ttexp/templates/components/bs-modal-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "modifiers",
            "modifiers": ["action"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "close");
          dom.setAttribute(el1, "aria-label", "Close");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "aria-hidden", "true");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["close"], [], ["loc", [null, [2, 59], [2, 77]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [5, 12], [5, 16]]]]], [], ["loc", [null, [5, 4], [5, 18]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "modal-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [7, 28], [7, 37]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/bs-modal-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "closeButton", ["loc", [null, [1, 6], [1, 17]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]]]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ttexp/templates/components/bs-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "ttexp/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "this", ["loc", [null, [4, 10], [4, 14]]]]], [], ["loc", [null, [4, 2], [4, 16]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 0
              },
              "end": {
                "line": 10,
                "column": 0
              }
            },
            "moduleName": "ttexp/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'id');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["modal-backdrop ", ["subexpr", "if", [["get", "fade", ["loc", [null, [9, 34], [9, 38]]]], "fade"], [], ["loc", [null, [9, 29], [9, 47]]]], " ", ["subexpr", "if", [["get", "in", ["loc", [null, [9, 53], [9, 55]]]], "in"], [], ["loc", [null, [9, 48], [9, 62]]]]]]], ["attribute", "id", ["concat", [["get", "backdropId", ["loc", [null, [9, 70], [9, 80]]]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "bs-modal-dialog", [], ["close", ["subexpr", "action", ["close"], [], ["loc", [null, [3, 25], [3, 41]]]], "fade", ["subexpr", "@mut", [["get", "fade", ["loc", [null, [3, 47], [3, 51]]]]], [], []], "in", ["subexpr", "@mut", [["get", "in", ["loc", [null, [3, 55], [3, 57]]]]], [], []], "id", ["subexpr", "@mut", [["get", "modalId", ["loc", [null, [3, 61], [3, 68]]]]], [], []], "title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [3, 75], [3, 80]]]]], [], []], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [3, 93], [3, 104]]]]], [], []], "keyboard", ["subexpr", "@mut", [["get", "keyboard", ["loc", [null, [3, 114], [3, 122]]]]], [], []], "header", ["subexpr", "@mut", [["get", "header", ["loc", [null, [3, 130], [3, 136]]]]], [], []], "body", ["subexpr", "@mut", [["get", "body", ["loc", [null, [3, 142], [3, 146]]]]], [], []], "footer", ["subexpr", "@mut", [["get", "footer", ["loc", [null, [3, 154], [3, 160]]]]], [], []], "size", ["subexpr", "@mut", [["get", "size", ["loc", [null, [3, 166], [3, 170]]]]], [], []], "backdropClose", ["subexpr", "@mut", [["get", "backdropClose", ["loc", [null, [3, 185], [3, 198]]]]], [], []]], 0, null, ["loc", [null, [3, 0], [5, 20]]]], ["block", "if", [["get", "showBackdrop", ["loc", [null, [8, 6], [8, 18]]]]], [], 1, null, ["loc", [null, [8, 0], [10, 7]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 19
          }
        },
        "moduleName": "ttexp/templates/components/bs-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ember-wormhole", [], ["to", "ember-bootstrap-modal-container", "renderInPlace", ["subexpr", "@mut", [["get", "_renderInPlace", ["loc", [null, [1, 69], [1, 83]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [13, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/components/bs-progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "ttexp/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [4, 16], [4, 30]]]]], [], ["loc", [null, [4, 8], [4, 32]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "ttexp/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("%\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [6, 8], [6, 26]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [3, 10], [3, 18]]]]], [], 0, 1, ["loc", [null, [3, 4], [7, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "ttexp/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [10, 38], [10, 52]]]]], [], ["loc", [null, [10, 30], [10, 54]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "ttexp/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("%");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [12, 30], [12, 48]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [9, 10], [9, 18]]]]], [], 0, 1, ["loc", [null, [9, 4], [13, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/bs-progress-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showLabel", ["loc", [null, [2, 6], [2, 15]]]]], [], 0, 1, ["loc", [null, [2, 0], [15, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ttexp/templates/components/bs-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/bs-progress.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/components/bs-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1, "disabled", "");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'selected');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "selected", ["subexpr", "bs-not", [["get", "value", ["loc", [null, [2, 39], [2, 44]]]]], [], ["loc", [null, [2, 30], [2, 46]]]]], ["content", "prompt", ["loc", [null, [3, 8], [3, 18]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "value", ["concat", [["subexpr", "bs-read-path", [["get", "item", ["loc", [null, [8, 34], [8, 38]]]], ["get", "optionValuePath", ["loc", [null, [8, 39], [8, 54]]]]], [], ["loc", [null, [8, 19], [8, 56]]]]]]], ["attribute", "selected", ["subexpr", "bs-eq", [["get", "item", ["loc", [null, [9, 29], [9, 33]]]], ["get", "value", ["loc", [null, [9, 34], [9, 39]]]]], [], ["loc", [null, [9, 21], [9, 41]]]]], ["inline", "bs-read-path", [["get", "item", ["loc", [null, [10, 23], [10, 27]]]], ["get", "optionLabelPath", ["loc", [null, [10, 28], [10, 43]]]]], [], ["loc", [null, [10, 8], [10, 45]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 9
          }
        },
        "moduleName": "ttexp/templates/components/bs-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "prompt", ["loc", [null, [1, 6], [1, 12]]]]], [], 0, null, ["loc", [null, [1, 0], [5, 7]]]], ["block", "each", [["get", "content", ["loc", [null, [7, 8], [7, 15]]]]], ["key", "@identity"], 1, null, ["loc", [null, [7, 0], [12, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ttexp/templates/components/cdv-nav-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/cdv-nav-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/components/form-element/errors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/errors.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "help-block");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "validationMessages.firstObject", ["loc", [null, [2, 29], [2, 63]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "ttexp/templates/components/form-element/errors.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showValidationMessages", ["loc", [null, [1, 6], [1, 28]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/feedback-icon.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [2, 41], [2, 49]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "ttexp/templates/components/form-element/feedback-icon.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasFeedback", ["loc", [null, [1, 6], [1, 17]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "ttexp/templates/components/form-element/horizontal/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "checkbox");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [1, 14], [1, 38]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [1, 43], [1, 73]]]]]]], ["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 25], [4, 29]]]]], [], []], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 54], [4, 59]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 69], [4, 77]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 87], [4, 95]]]]], [], []]], ["loc", [null, [4, 12], [4, 97]]]], ["content", "label", ["loc", [null, [4, 98], [4, 107]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [7, 4], [7, 48]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 8
              }
            },
            "moduleName": "ttexp/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 20], [5, 25]]]], ["get", "formElementId", ["loc", [null, [5, 26], [5, 39]]]], ["get", "validation", ["loc", [null, [5, 40], [5, 50]]]]], [], ["loc", [null, [5, 12], [5, 52]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 8,
                "column": 8
              }
            },
            "moduleName": "ttexp/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 26], [7, 39]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 45], [7, 49]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 55], [7, 66]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 73], [7, 78]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 91], [7, 102]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 113], [7, 122]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 132], [7, 140]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 150], [7, 158]]]]], [], []]], ["loc", [null, [7, 12], [7, 160]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]]], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]]], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]]]]]], ["content", "label", ["loc", [null, [2, 118], [2, 127]]]], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]]]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 14], [4, 22]]]]], [], 0, 1, ["loc", [null, [4, 8], [8, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 8], [9, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 8], [10, 52]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 8
              },
              "end": {
                "line": 16,
                "column": 8
              }
            },
            "moduleName": "ttexp/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [15, 20], [15, 25]]]], ["get", "formElementId", ["loc", [null, [15, 26], [15, 39]]]], ["get", "validation", ["loc", [null, [15, 40], [15, 50]]]]], [], ["loc", [null, [15, 12], [15, 52]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "ttexp/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [17, 28], [17, 32]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [17, 38], [17, 49]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [17, 56], [17, 61]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [17, 74], [17, 85]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [17, 96], [17, 105]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [17, 115], [17, 123]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [17, 133], [17, 141]]]]], [], []]], ["loc", [null, [17, 12], [17, 143]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [13, 18], [13, 42]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [13, 47], [13, 77]]]]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [14, 14], [14, 22]]]]], [], 0, 1, ["loc", [null, [14, 8], [18, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [19, 8], [19, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [20, 8], [20, 52]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/form-element/horizontal/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [22, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ttexp/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]]], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]]], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]]]]]], ["content", "label", ["loc", [null, [2, 118], [2, 127]]]], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]]]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 23], [4, 36]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 42], [4, 46]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 55], [4, 62]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 79], [4, 98]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 115], [4, 134]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 141], [4, 146]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 156], [4, 164]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 174], [4, 182]]]]], [], []]], ["loc", [null, [4, 8], [4, 184]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]]]]]], ["inline", "bs-select", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 25], [10, 29]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [10, 38], [10, 45]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [10, 62], [10, 81]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [10, 98], [10, 117]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 124], [10, 129]]]]], [], []]], ["loc", [null, [10, 8], [10, 131]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/form-element/horizontal/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ttexp/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]]], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]]], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]]]]]], ["content", "label", ["loc", [null, [2, 118], [2, 127]]]], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]]]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 25], [4, 38]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 44], [4, 48]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 55], [4, 60]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 73], [4, 84]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 95], [4, 104]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 110], [4, 114]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 120], [4, 124]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 134], [4, 142]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 152], [4, 160]]]]], [], []]], ["loc", [null, [4, 8], [4, 162]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]]]]]], ["inline", "bs-textarea", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 27], [10, 31]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 38], [10, 43]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [10, 56], [10, 67]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [10, 78], [10, 87]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [10, 93], [10, 97]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [10, 103], [10, 107]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [10, 117], [10, 125]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [10, 135], [10, 143]]]]], [], []]], ["loc", [null, [10, 8], [10, 145]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/form-element/horizontal/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ttexp/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "ttexp/templates/components/form-element/inline/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]]]], [], []], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]]]], [], []]], ["loc", [null, [3, 8], [3, 93]]]], ["content", "label", ["loc", [null, [3, 94], [3, 103]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/components/form-element/inline/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]]], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]]]]]], ["content", "label", ["loc", [null, [2, 89], [2, 98]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]]], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]]], ["get", "validation", ["loc", [null, [5, 32], [5, 42]]]]], [], ["loc", [null, [5, 4], [5, 44]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]]]], [], []]], ["loc", [null, [7, 4], [7, 152]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/form-element/inline/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]]]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ttexp/templates/components/form-element/inline/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/inline/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]]], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]]]]]], ["content", "label", ["loc", [null, [2, 89], [2, 98]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/form-element/inline/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]]]], [], []]], ["loc", [null, [4, 0], [4, 176]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/inline/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]]], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]]]]]], ["content", "label", ["loc", [null, [2, 89], [2, 98]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/form-element/inline/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 36], [4, 40]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 47], [4, 52]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 102], [4, 106]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 112], [4, 116]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 126], [4, 134]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 144], [4, 152]]]]], [], []]], ["loc", [null, [4, 0], [4, 154]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "ttexp/templates/components/form-element/vertical/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]]]], [], []], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]]]], [], []]], ["loc", [null, [3, 8], [3, 93]]]], ["content", "label", ["loc", [null, [3, 94], [3, 103]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]]], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]]]]]], ["content", "label", ["loc", [null, [2, 89], [2, 98]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]]], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]]], ["get", "validation", ["loc", [null, [5, 32], [5, 42]]]]], [], ["loc", [null, [5, 4], [5, 44]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]]]], [], []]], ["loc", [null, [7, 4], [7, 152]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/form-element/vertical/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]]]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 0], [10, 44]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ttexp/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/vertical/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]]], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]]]]]], ["content", "label", ["loc", [null, [2, 89], [2, 98]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/form-element/vertical/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]]]], [], []]], ["loc", [null, [4, 0], [4, 176]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/components/form-element/vertical/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]]], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]]]]]], ["content", "label", ["loc", [null, [2, 89], [2, 98]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/components/form-element/vertical/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 37], [4, 42]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 48], [4, 52]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 106], [4, 114]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 124], [4, 132]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 138], [4, 142]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 148], [4, 152]]]]], [], []]], ["loc", [null, [4, 0], [4, 154]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ttexp/templates/help", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 10
          }
        },
        "moduleName": "ttexp/templates/help.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("This is the HELP");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 10
          }
        },
        "moduleName": "ttexp/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 sidebar");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "id", "content");
        dom.setAttribute(el4, "class", "col-md-9 col-md-offset-3");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row hidden-xs");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-12");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "id", "logo-app");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "src", "assets/images/logo-app.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "id", "main-content");
        dom.setAttribute(el5, "class", "panel panel-primary");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "panel-heading");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        dom.setAttribute(el7, "class", "panel-title");
        var el8 = dom.createTextNode("Home");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "panel-body");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("Benvenuto in un innovativo metodo di allenamento che ti permette di misurare, testare e sviluppare le tue \n						capacità.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("Entra nelle situazioni di vendita e comportati come se fossi davvero sul campo: clicca la risposta che ritieni \n						migliore e scopri le reazioni dei tuoi clienti.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("Buon divertimento!");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "customer-logo");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/images/logo-customer.png");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "partial", ["layout/menu"], [], ["loc", [null, [5, 4], [5, 29]]]], ["content", "outlet", ["loc", [null, [32, 0], [32, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/layout/menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 3
            },
            "end": {
              "line": 6,
              "column": 3
            }
          },
          "moduleName": "ttexp/templates/layout/menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "currentUser.user.fullName", ["loc", [null, [5, 4], [5, 33]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 3
            },
            "end": {
              "line": 8,
              "column": 3
            }
          },
          "moduleName": "ttexp/templates/layout/menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				 \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 1
            },
            "end": {
              "line": 13,
              "column": 73
            }
          },
          "moduleName": "ttexp/templates/layout/menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 1
            },
            "end": {
              "line": 14,
              "column": 88
            }
          },
          "moduleName": "ttexp/templates/layout/menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Simulazioni");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 1
            },
            "end": {
              "line": 22,
              "column": 1
            }
          },
          "moduleName": "ttexp/templates/layout/menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "list-group-item");
          var el2 = dom.createTextNode("Logout");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["invalidateSession"], [], ["loc", [null, [21, 29], [21, 59]]]]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 2
              },
              "end": {
                "line": 23,
                "column": 51
              }
            },
            "moduleName": "ttexp/templates/layout/menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Login");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 1
            },
            "end": {
              "line": 24,
              "column": 1
            }
          },
          "moduleName": "ttexp/templates/layout/menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["login"], ["class", "list-group-item"], 0, null, ["loc", [null, [23, 2], [23, 63]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 6
          }
        },
        "moduleName": "ttexp/templates/layout/menu.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "menu-header");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "main-menu");
        dom.setAttribute(el1, "class", "list-group");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "list-group-item disabled hidden");
        dom.setAttribute(el2, "data-page-route", "messages");
        var el3 = dom.createTextNode("Messaggi");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "list-group-item disabled hidden");
        dom.setAttribute(el2, "data-page-route", "help");
        var el3 = dom.createTextNode("Help");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "list-group-item disabled hidden");
        dom.setAttribute(el2, "data-page-route", "user");
        var el3 = dom.createTextNode("Profilo Utente");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "list-group-item hidden showAndroid");
        var el3 = dom.createTextNode("Esci");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "test-storage-file");
        var el3 = dom.createElement("img");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "id", "app-version");
        var el3 = dom.createTextNode("v.");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(element1, [11]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createMorphAt(element1, 13, 13);
        morphs[5] = dom.createMorphAt(dom.childAt(element1, [17]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "currentUser.user", ["loc", [null, [4, 9], [4, 25]]]]], [], 0, 1, ["loc", [null, [4, 3], [8, 10]]]], ["block", "link-to", ["index"], ["class", "list-group-item", "data-page-route", "index"], 2, null, ["loc", [null, [13, 1], [13, 85]]]], ["block", "link-to", ["scenarios"], ["class", "list-group-item", "data-page-route", "scenarios"], 3, null, ["loc", [null, [14, 1], [14, 100]]]], ["element", "action", ["closeApp"], [], ["loc", [null, [18, 47], [18, 68]]]], ["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [20, 7], [20, 30]]]]], [], 4, 5, ["loc", [null, [20, 1], [24, 8]]]], ["content", "app-version", ["loc", [null, [28, 26], [28, 41]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("ttexp/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 3
            },
            "end": {
              "line": 25,
              "column": 3
            }
          },
          "moduleName": "ttexp/templates/login.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "errorMessage", ["loc", [null, [24, 7], [24, 23]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 4
              },
              "end": {
                "line": 206,
                "column": 1
              }
            },
            "moduleName": "ttexp/templates/login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "terms-text");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Questo strumento di simulazione della trattativa ha solamente obiettivi e finalità di allenamento della parte relativa alla trattativa commerciale e di\n			    rapporto con il cliente.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Si da per scontato che il consulente pensionistico Generali adempia a tutti gli obblighi formali per il trattamento dei dati personali durante l’attività\n			    di contatto con la clientela effettiva e potenziale per finalità commerciali a distanza.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Il consenso privacy commerciale: è l’autorizzazione rilasciata dal Cliente, effettivo o potenziale alla Compagnia, ad essere contattato per finalità di\n			    natura commerciale/promozionale attraverso i mezzi di comunicazione specificamente\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			scelti (");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("posta ordinaria/telefono ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("e/o ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("email, sms/mms/app.");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("); tale consenso viene raccolto attraverso la compilazione dell’");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("Informativa Commerciale ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("o dell’");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("Informativa Mista ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("(vedi News on Line:    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("Uniformazione della tipologia di consenso privacy in“Informativa Generali Italia”");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(").\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Nella sostanza ogni soggetto deve essere posto nella condizione di scegliere liberamente, dopo essere stato adeguatamente informato, se acconsentire o meno\n			    al trattamento dei propri dati\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    personali.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("TELEFONATA DI CONTATTO");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Al primo contatto telefonico sarà necessario qualificarsi: nominativo della persona che contatta e azienda per cui lavora, finalità e provenienza dei dati\n			    del contatto;\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			Esempio testo telefonata:");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode(" “Buongiorno….., sono (nome e cognome)di Generali Italia - divisione ….., abbiamo acquisito il suo nominativo ed i suoi riferimenti dall’");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("albo di appartenenza");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("; La contattiamo per proporle una consulenza specifica legata alla Sua ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("professione");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("\n			        ; se mi conferma il Suo consenso a proseguire con la telefonata, consenso che può revocare in ogni momento inviando apposita comunicazione, avremo\n			        piacere di proporle un incontro per…..”.\n			    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Sarà inoltre necessario, da parte del chiamante, raccogliere da parte\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    dell’interlocutore, il consenso a proseguire con la conversazione, annotandolo\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    nell’apposita scheda di raccolta consenso.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Se si riceve il CONSENSO da parte dell’interlocutore è possibile la prosecuzione della\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    telefonata e annotazione dello stesso nella Scheda Raccolta Consenso\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    “");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("SCHEDA RACCOLTA CONSENSO”");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Cliente: __________________________\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Cognome e Nome: ________________________\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Contattato da: …….. il: ……..\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    CONSENSO Reg.to 34/2010\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("Effettuato script primo contatto ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			    SI NO\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("Ottenuto consenso proseguire ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			    SI NO\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Se non si riceve il CONSENSO:\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    _ non si potrà proseguire la telefonata;\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    _ si dovrà annotare il mancato consenso nella predetta Scheda;\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    _ qualora il Cliente specifichi di non voler essere contattato in futuro per iniziative\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    commerciali, si indicherà allo stesso di COMUNICARE FORMALMENTE TALE DINIEGO, fornendo i relativi riferimenti cui inviare la comunicazione (n° fax\n			    Agenzia);\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    _ ove pervenga successiva comunicazione formale di mancato consenso a futuri contatti commerciali (vedi 3° punto), si registrerà tale diniego in GESTIONE\n			    DATI ANAGRAFICI che aggiornerà settimanalmente la Black List Aziendale.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("DURANTE L’APPUNTAMENTO");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    A l primo appuntamento è opportuno consegnare l’Informativa Privacy Commerciale al Cliente e acquisire il consenso scritto da parte dello stesso.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    In particolare, si dovrà:\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    _ in caso ottenimento del consenso\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    - conservare l’Informativa nella documentazione del Cliente;\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    - registrare come da prassi il consenso in anagrafica Clienti;\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("CR.IA.009.2014");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    6\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    _ in caso di mancato ottenimento del consenso\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    - conservare l’informativa nella documentazione del Cliente;\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    - registrare come da prassi il diniego in anagrafica Clienti per il corretto\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    aggiornamento della Black List Aziendale.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("SOTTOSCRIZIONE DEL CONTRATTO ASSICURATIVO");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Il consenso privacy per fini assicurativi viene raccolto attraverso la sottoscrizione dell’");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createTextNode("Informativa Assicurativa o Mista e ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("sottoscritto\n			    contestualmente al contratto/i assicurativo/i, preventivo/i o proposta/e.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Tale consenso è l’autorizzazione rilasciata alla Compagnia da parte dei soggetti di cui vengono trattati i dati personali, al trattamento dei propri dati\n			    con esclusivo riferimento al/i contratto/i assicurativo/i, preventivo/i o proposta/e,; Questo\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    autorizza la Rete di vendita a poter sempre contattare la Clientela per gestire gli\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    aspetti relativi al/i contratto/i in essere, anche se il cliente ha negato il proprio\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    consenso all’attività di natura commerciale. In tale ipotesi NON potrà essere\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    effettuata alcuna comunicazione di natura puramente commerciale.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("RACCOLTA REFERENZE");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Non è possibile contattare telefonicamente le referenze: in tal senso è assolutamente da utilizzare una forma di contatto “diretta” anche per il tramite\n			    del nostro Cliente.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("REVOCA TRATTAMENTO DATI PERSONALI");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    Ricordiamo come ogni singolo cliente ha anche il diritto di revocare, in qualsiasi momento, il consenso concesso e di opporsi al trattamento dei suoi dati\n			    personali per fini commerciali.\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n			    E’ obbligatorio rispettare la volontà espressa da ogni cliente; infatti, in assenza di un valido consenso, il trattamento dei dati risulta illecito e\n			    passibile di sanzioni\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 0
            },
            "end": {
              "line": 208,
              "column": 1
            }
          },
          "moduleName": "ttexp/templates/login.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("   	");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "bs-modal-body", [], [], 0, null, ["loc", [null, [32, 4], [206, 19]]]], ["inline", "bs-modal-footer", [], ["closeTitle", "Accetto"], ["loc", [null, [207, 4], [207, 44]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 208,
            "column": 14
          }
        },
        "moduleName": "ttexp/templates/login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n.form-signin {\n    margin: 0 auto;\n    max-width: 330px;\n    padding: 15px;\n}}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "class", "form-signin");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Login TTExp");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-group");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "identification");
        dom.setAttribute(el4, "class", "sr-only");
        var el5 = dom.createTextNode("Email");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-group");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "password");
        dom.setAttribute(el4, "class", "sr-only");
        var el5 = dom.createTextNode("Password");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-group");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "submit");
        dom.setAttribute(el4, "class", "btn btn-lg btn-primary btn-block");
        var el5 = dom.createTextNode("Login");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-group");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [9]), 1, 1);
        morphs[4] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["element", "action", ["authenticate"], ["on", "submit", "method", "get"], ["loc", [null, [9, 7], [9, 57]]]], ["inline", "input", [], ["class", "form-control", "id", "identification", "placeholder", "Email / Username", "autocapitalize", "none", "autocorrect", "off", "value", ["subexpr", "@mut", [["get", "identification", ["loc", [null, [13, 129], [13, 143]]]]], [], []]], ["loc", [null, [13, 3], [13, 145]]]], ["inline", "input", [], ["class", "form-control", "id", "password", "placeholder", "Password", "type", "password", "autocapitalize", "none", "autocorrect", "off", "value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [17, 131], [17, 139]]]]], [], []]], ["loc", [null, [17, 3], [17, 141]]]], ["block", "if", [["get", "errorMessage", ["loc", [null, [23, 9], [23, 21]]]]], [], 0, null, ["loc", [null, [23, 3], [25, 10]]]], ["block", "bs-modal", [], ["body", false, "footer", false, "open", true, "elementId", "downloadModal", "title", "Termini di utilizzo", "closeButton", false], 1, null, ["loc", [null, [31, 0], [208, 14]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ttexp/templates/page-not-found", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 10
          }
        },
        "moduleName": "ttexp/templates/page-not-found.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("ERROR: Page not found");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ttexp/templates/play", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 32
              },
              "end": {
                "line": 31,
                "column": 155
              }
            },
            "moduleName": "ttexp/templates/play.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("La fase è terminata: verifica la qualità della tua performance...");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 3
            },
            "end": {
              "line": 32,
              "column": 3
            }
          },
          "moduleName": "ttexp/templates/play.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "list-group-item");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["scores", ["get", "model.scenario.playState.playthrough", ["loc", [null, [31, 52], [31, 88]]]]], [], 0, null, ["loc", [null, [31, 32], [31, 167]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 33,
                "column": 4
              },
              "end": {
                "line": 38,
                "column": 4
              }
            },
            "moduleName": "ttexp/templates/play.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "list-group-item");
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "fa fa-circle-o-notch fa-spin fa-fw loading-icon");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var element3 = dom.childAt(element2, [3]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element2, 'data-item-id');
            morphs[1] = dom.createElementMorph(element3);
            morphs[2] = dom.createMorphAt(element3, 0, 0);
            return morphs;
          },
          statements: [["attribute", "data-item-id", ["get", "item.id", ["loc", [null, [34, 48], [34, 55]]]]], ["element", "action", ["clickItem", ["get", "item", ["loc", [null, [36, 30], [36, 34]]]]], [], ["loc", [null, [36, 9], [36, 36]]]], ["content", "item.text", ["loc", [null, [36, 37], [36, 50]]]]],
          locals: ["item"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 3
            },
            "end": {
              "line": 39,
              "column": 3
            }
          },
          "moduleName": "ttexp/templates/play.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.scenario.playState.video.items", ["loc", [null, [33, 12], [33, 48]]]]], [], 0, null, ["loc", [null, [33, 4], [38, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 59,
                "column": 3
              },
              "end": {
                "line": 61,
                "column": 3
              }
            },
            "moduleName": "ttexp/templates/play.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				(prev: ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(")\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "model.scenario.playState.prevVideo.uniqueCode", ["loc", [null, [60, 11], [60, 60]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 67,
                    "column": 5
                  },
                  "end": {
                    "line": 69,
                    "column": 5
                  }
                },
                "moduleName": "ttexp/templates/play.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("						");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("span");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(": ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(" => tot:");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(" - min:");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(" - max:");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("br");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var morphs = new Array(6);
                morphs[0] = dom.createAttrMorph(element0, 'title');
                morphs[1] = dom.createMorphAt(element0, 0, 0);
                morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
                morphs[4] = dom.createMorphAt(fragment, 7, 7, contextualElement);
                morphs[5] = dom.createMorphAt(fragment, 9, 9, contextualElement);
                return morphs;
              },
              statements: [["attribute", "title", ["concat", [["get", "score.variableName", ["loc", [null, [68, 21], [68, 39]]]]]]], ["content", "score.variableCode", ["loc", [null, [68, 43], [68, 65]]]], ["inline", "div", [["subexpr", "round", [["subexpr", "mult", [["subexpr", "div", [["get", "score.value", ["loc", [null, [68, 98], [68, 109]]]], ["get", "model.scenario.playState.stepsCount", ["loc", [null, [68, 110], [68, 145]]]]], [], ["loc", [null, [68, 93], [68, 146]]]], 100], [], ["loc", [null, [68, 87], [68, 151]]]]], [], ["loc", [null, [68, 80], [68, 152]]]], 100], [], ["loc", [null, [68, 74], [68, 158]]]], ["content", "score.value", ["loc", [null, [68, 166], [68, 181]]]], ["content", "score.minValue", ["loc", [null, [68, 188], [68, 206]]]], ["content", "score.maxValue", ["loc", [null, [68, 213], [68, 231]]]]],
              locals: ["score"],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 66,
                  "column": 4
                },
                "end": {
                  "line": 70,
                  "column": 4
                }
              },
              "moduleName": "ttexp/templates/play.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "each", [["get", "model.scenario.playState.playthrough.scores", ["loc", [null, [67, 13], [67, 56]]]]], [], 0, null, ["loc", [null, [67, 5], [69, 14]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 63,
                "column": 3
              },
              "end": {
                "line": 71,
                "column": 3
              }
            },
            "moduleName": "ttexp/templates/play.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				Passi: ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 6, 6, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "model.scenario.playState.stepsCount", ["loc", [null, [65, 11], [65, 50]]]], ["block", "if", [["get", "model.scenario.playState.stepsCount", ["loc", [null, [66, 10], [66, 45]]]]], [], 0, null, ["loc", [null, [66, 4], [70, 11]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 56,
              "column": 1
            },
            "end": {
              "line": 73,
              "column": 1
            }
          },
          "moduleName": "ttexp/templates/play.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "id", "debug-window");
          var el2 = dom.createTextNode("\n			Video: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("			\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element1, 1, 1);
          morphs[1] = dom.createMorphAt(element1, 3, 3);
          morphs[2] = dom.createMorphAt(element1, 5, 5);
          return morphs;
        },
        statements: [["content", "model.scenario.playState.video.uniqueCode", ["loc", [null, [58, 10], [58, 55]]]], ["block", "if", [["get", "model.scenario.playState.prevVideo", ["loc", [null, [59, 9], [59, 43]]]]], [], 0, null, ["loc", [null, [59, 3], [61, 10]]]], ["block", "if", [false], [], 1, null, ["loc", [null, [63, 3], [71, 10]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 76,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/play.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "overlay");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "overlay-content");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "id", "overlay-description");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "id", "overlay-button");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "class", "btn btn-primary");
        var el6 = dom.createTextNode("INIZIA");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "video-container");
        dom.setAttribute(el2, "class", "cinemaOff hiddenxxx");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("video");
        dom.setAttribute(el3, "id", "video-player");
        dom.setAttribute(el3, "webkit-playsinline", "");
        dom.setAttribute(el3, "playsinline", "");
        var el4 = dom.createTextNode("\n			Your browser does not support the video element.\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "text-container");
        dom.setAttribute(el2, "class", "fullscreenXXX subtitles hiddenXXX");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "text-dialog");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "id", "text-baloon");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "side-chat");
        dom.setAttribute(el2, "class", "minimized");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "button-chat");
        dom.setAttribute(el3, "class", "btn btn-link ttexp-btn ttexp-position-absolute top-left");
        dom.setAttribute(el3, "role", "button");
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "glyphicon glyphicon-comment");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "button-audio");
        dom.setAttribute(el3, "class", "btn btn-link ttexp-btn ttexp-position-absolute top-right");
        dom.setAttribute(el3, "role", "button");
        dom.setAttribute(el3, "style", "display:none;");
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "glyphicon glyphicon-volume-up");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "id", "chat-options");
        dom.setAttribute(el3, "class", "list-group ");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("			\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("\n			<li class=\"list-group-item\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenenan massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas.</li>\n			<li class=\"list-group-item\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenenan massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas.</li>\n			<li class=\"list-group-item\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenenan massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas.</li>\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "id", "button-close");
        dom.setAttribute(el2, "class", "btn btn-link ttexp-btn ttexp-position-absolute top-left");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "fa fa-home");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("\n	{{#link-to \"scenarios\" id=\"button-close\" class=\"btn btn-link ttexp-btn ttexp-position-absolute top-left\"}}<span class=\"glyphicon glyphicon-remove-circle\"></span>{{/link-to}}\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "customer-logo");
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/images/logo-customer.png");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [0]);
        var element5 = dom.childAt(element4, [1, 1]);
        var element6 = dom.childAt(element5, [3, 1]);
        var element7 = dom.childAt(element4, [3, 1]);
        var element8 = dom.childAt(element4, [7]);
        var element9 = dom.childAt(element8, [1]);
        var element10 = dom.childAt(element4, [9]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(element5, [1]), 1, 1);
        morphs[1] = dom.createElementMorph(element6);
        morphs[2] = dom.createAttrMorph(element7, 'onended');
        morphs[3] = dom.createAttrMorph(element7, 'onerror');
        morphs[4] = dom.createElementMorph(element9);
        morphs[5] = dom.createMorphAt(dom.childAt(element8, [5]), 1, 1);
        morphs[6] = dom.createElementMorph(element10);
        morphs[7] = dom.createMorphAt(element4, 15, 15);
        morphs[8] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "breaklines", [["get", "model.scenario.description", ["loc", [null, [5, 17], [5, 43]]]]], [], ["loc", [null, [5, 4], [5, 45]]]], ["element", "action", ["startVideo"], [], ["loc", [null, [8, 7], [8, 30]]]], ["attribute", "onended", ["subexpr", "action", ["videoEnded"], [], ["loc", [null, [13, 35], [13, 58]]]]], ["attribute", "onerror", ["subexpr", "action", ["videoEnded"], [], ["loc", [null, [13, 67], [13, 90]]]]], ["element", "action", ["toggleSideChat"], ["on", "click"], ["loc", [null, [26, 105], [26, 143]]]], ["block", "if", [["get", "model.scenario.playState.gameCompleted", ["loc", [null, [30, 9], [30, 47]]]]], [], 0, 1, ["loc", [null, [30, 3], [39, 10]]]], ["element", "action", ["exit"], [], ["loc", [null, [49, 86], [49, 103]]]], ["block", "if", [false], [], 2, null, ["loc", [null, [56, 1], [73, 8]]]], ["content", "outlet", ["loc", [null, [75, 0], [75, 10]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ttexp/templates/scenarios", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 42,
                "column": 12
              },
              "end": {
                "line": 44,
                "column": 12
              }
            },
            "moduleName": "ttexp/templates/scenarios.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("									  				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "href", "#");
            dom.setAttribute(el1, "class", "btn-link");
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "fa fa-play-circle");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element4);
            return morphs;
          },
          statements: [["element", "action", ["play", ["get", "scenario", ["loc", [null, [43, 43], [43, 51]]]]], [], ["loc", [null, [43, 27], [43, 53]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 44,
                "column": 12
              },
              "end": {
                "line": 46,
                "column": 12
              }
            },
            "moduleName": "ttexp/templates/scenarios.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("													");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "class", "btn btn-link disabled");
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "fa fa-minus-circle");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 49,
                "column": 12
              },
              "end": {
                "line": 51,
                "column": 12
              }
            },
            "moduleName": "ttexp/templates/scenarios.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("									  				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "href", "#");
            dom.setAttribute(el1, "class", "btn-link");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element3);
            morphs[1] = dom.createMorphAt(element3, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["play", ["get", "scenario", ["loc", [null, [50, 43], [50, 51]]]]], [], ["loc", [null, [50, 27], [50, 53]]]], ["content", "scenario.name", ["loc", [null, [50, 71], [50, 88]]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 51,
                "column": 12
              },
              "end": {
                "line": 53,
                "column": 12
              }
            },
            "moduleName": "ttexp/templates/scenarios.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("													");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "class", "disabled");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "scenario.name", ["loc", [null, [52, 33], [52, 50]]]]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 59,
                  "column": 14
                },
                "end": {
                  "line": 60,
                  "column": 14
                }
              },
              "moduleName": "ttexp/templates/scenarios.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode(" / ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "scenario.requiredPlays", ["loc", [null, [59, 47], [59, 73]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 56,
                "column": 12
              },
              "end": {
                "line": 62,
                "column": 12
              }
            },
            "moduleName": "ttexp/templates/scenarios.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("									  				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            var el2 = dom.createTextNode("\n										  				");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n														");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("													");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element2, 1, 1);
            morphs[1] = dom.createMorphAt(element2, 3, 3);
            return morphs;
          },
          statements: [["content", "scenario.attempts", ["loc", [null, [58, 16], [58, 37]]]], ["block", "if", [["get", "scenario.requiredPlays", ["loc", [null, [59, 20], [59, 42]]]]], [], 0, null, ["loc", [null, [59, 14], [60, 21]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child5 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 65,
                  "column": 14
                },
                "end": {
                  "line": 66,
                  "column": 14
                }
              },
              "moduleName": "ttexp/templates/scenarios.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode(" / ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "scenario.requiredPlays", ["loc", [null, [65, 47], [65, 73]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 62,
                "column": 12
              },
              "end": {
                "line": 68,
                "column": 12
              }
            },
            "moduleName": "ttexp/templates/scenarios.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("									  				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "class", "disabled");
            var el2 = dom.createTextNode("\n									  					");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n														");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("									  				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element1, 1, 1);
            morphs[1] = dom.createMorphAt(element1, 3, 3);
            return morphs;
          },
          statements: [["content", "scenario.attempts", ["loc", [null, [64, 16], [64, 37]]]], ["block", "if", [["get", "scenario.requiredPlays", ["loc", [null, [65, 20], [65, 42]]]]], [], 0, null, ["loc", [null, [65, 14], [66, 21]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child6 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 72,
                  "column": 13
                },
                "end": {
                  "line": 74,
                  "column": 13
                }
              },
              "moduleName": "ttexp/templates/scenarios.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("														");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("a");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("%");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["inline", "round", [["get", "scenario.rating", ["loc", [null, [73, 25], [73, 40]]]]], [], ["loc", [null, [73, 17], [73, 42]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 74,
                  "column": 13
                },
                "end": {
                  "line": 76,
                  "column": 13
                }
              },
              "moduleName": "ttexp/templates/scenarios.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("														");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("a");
              var el2 = dom.createTextNode("-");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 71,
                "column": 12
              },
              "end": {
                "line": 77,
                "column": 12
              }
            },
            "moduleName": "ttexp/templates/scenarios.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "scenario.attempts", ["loc", [null, [72, 19], [72, 36]]]]], [], 0, 1, ["loc", [null, [72, 13], [76, 20]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child7 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 78,
                  "column": 13
                },
                "end": {
                  "line": 80,
                  "column": 13
                }
              },
              "moduleName": "ttexp/templates/scenarios.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("														");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("a");
              dom.setAttribute(el1, "class", "disabled");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("%");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["inline", "round", [["get", "scenario.rating", ["loc", [null, [79, 42], [79, 57]]]]], [], ["loc", [null, [79, 34], [79, 59]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 80,
                  "column": 13
                },
                "end": {
                  "line": 82,
                  "column": 13
                }
              },
              "moduleName": "ttexp/templates/scenarios.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("														");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("a");
              dom.setAttribute(el1, "class", "disabled");
              var el2 = dom.createTextNode("-");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 77,
                "column": 12
              },
              "end": {
                "line": 83,
                "column": 12
              }
            },
            "moduleName": "ttexp/templates/scenarios.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "scenario.attempts", ["loc", [null, [78, 19], [78, 36]]]]], [], 0, 1, ["loc", [null, [78, 13], [82, 20]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child8 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 88,
                    "column": 14
                  },
                  "end": {
                    "line": 90,
                    "column": 14
                  }
                },
                "moduleName": "ttexp/templates/scenarios.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("															");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("i");
                dom.setAttribute(el1, "class", "fa fa-check-circle-o");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 90,
                    "column": 14
                  },
                  "end": {
                    "line": 92,
                    "column": 14
                  }
                },
                "moduleName": "ttexp/templates/scenarios.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("															");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
                dom.setAttribute(el1, "href", "#");
                dom.setAttribute(el1, "class", "btn-link");
                var el2 = dom.createElement("i");
                dom.setAttribute(el2, "class", "fa fa-download");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var morphs = new Array(1);
                morphs[0] = dom.createElementMorph(element0);
                return morphs;
              },
              statements: [["element", "action", ["download", ["get", "scenario", ["loc", [null, [91, 47], [91, 55]]]]], [], ["loc", [null, [91, 27], [91, 57]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 87,
                  "column": 13
                },
                "end": {
                  "line": 93,
                  "column": 13
                }
              },
              "moduleName": "ttexp/templates/scenarios.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "scenario.isUpdated._result", ["loc", [null, [88, 20], [88, 46]]]]], [], 0, 1, ["loc", [null, [88, 14], [92, 21]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 93,
                  "column": 13
                },
                "end": {
                  "line": 95,
                  "column": 13
                }
              },
              "moduleName": "ttexp/templates/scenarios.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("														");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1, "class", "fa fa-question-circle");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 86,
                "column": 12
              },
              "end": {
                "line": 96,
                "column": 12
              }
            },
            "moduleName": "ttexp/templates/scenarios.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["subexpr", "is-fulfilled", [["get", "scenario.isUpdated", ["loc", [null, [87, 33], [87, 51]]]]], [], ["loc", [null, [87, 19], [87, 52]]]]], [], 0, 1, ["loc", [null, [87, 13], [95, 20]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 39,
              "column": 9
            },
            "end": {
              "line": 99,
              "column": 9
            }
          },
          "moduleName": "ttexp/templates/scenarios.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("									  	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n											");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "fit");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("											");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n											");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("											");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n									  		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "text-center");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("								  			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n									  		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "text-center");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("											");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n									  		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("								  			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n									  	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [1]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element5, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element5, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element5, [5]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element5, [7]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element5, [9]), 1, 1);
          return morphs;
        },
        statements: [["block", "if", [["get", "scenario.enabled", ["loc", [null, [42, 18], [42, 34]]]]], [], 0, 1, ["loc", [null, [42, 12], [46, 19]]]], ["block", "if", [["get", "scenario.enabled", ["loc", [null, [49, 18], [49, 34]]]]], [], 2, 3, ["loc", [null, [49, 12], [53, 19]]]], ["block", "if", [["get", "scenario.enabled", ["loc", [null, [56, 18], [56, 34]]]]], [], 4, 5, ["loc", [null, [56, 12], [68, 19]]]], ["block", "if", [["get", "scenario.enabled", ["loc", [null, [71, 18], [71, 34]]]]], [], 6, 7, ["loc", [null, [71, 12], [83, 19]]]], ["block", "unless", [["subexpr", "is-pending", [["get", "scenario.isUpdated", ["loc", [null, [86, 34], [86, 52]]]]], [], ["loc", [null, [86, 22], [86, 53]]]]], [], 8, null, ["loc", [null, [86, 12], [96, 23]]]]],
        locals: ["scenario"],
        templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 99,
              "column": 9
            },
            "end": {
              "line": 103,
              "column": 9
            }
          },
          "moduleName": "ttexp/templates/scenarios.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("									  	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n									  		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "colspan", "5");
          var el3 = dom.createTextNode("Nessuna simulazione disponibile");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n								  		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 116,
              "column": 1
            },
            "end": {
              "line": 120,
              "column": 1
            }
          },
          "moduleName": "ttexp/templates/scenarios.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "progress progress-striped");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "progress-bar active");
          dom.setAttribute(el2, "role", "progressbar");
          dom.setAttribute(el2, "aria-valuenow", "0");
          dom.setAttribute(el2, "aria-valuemin", "0");
          dom.setAttribute(el2, "aria-valuemax", "100");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 125,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/scenarios.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 sidebar");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "id", "content");
        dom.setAttribute(el4, "class", "col-md-9 col-md-offset-3");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row hidden-xs");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-12");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "id", "logo-app");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "src", "assets/images/logo-app.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "id", "main-content");
        dom.setAttribute(el5, "class", "panel panel-primary");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "panel-heading");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        dom.setAttribute(el7, "class", "panel-title");
        var el8 = dom.createTextNode("Simulazioni");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "panel-body");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "intro-text hidden-xs");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("Per entrare in GENius clicca su una delle fasi qui sotto.");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("Puoi seguire l’ordine cronologico, partendo con la Telefonata, oppure cominciare dalla fase in cui pensi di andare meglio, ad esempio la Chiusura.");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("In ogni caso, per ciascuna fase sono richiesti almeno otto (8) tentativi, al termine dei quali potrai decidere con il tuo Manager se approfondire ulteriormente l’allenamento.");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("hr");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "table-responsive");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("table");
        dom.setAttribute(el8, "class", "table table-striped");
        var el9 = dom.createTextNode("\n								");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("thead");
        var el10 = dom.createTextNode("\n									");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n										");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        dom.setAttribute(el11, "class", "fit");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n										");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Fasi");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n										");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        dom.setAttribute(el11, "style", "width:25%");
        dom.setAttribute(el11, "class", "text-center");
        var el12 = dom.createTextNode("Tentativi");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n										");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        dom.setAttribute(el11, "style", "width:25%");
        dom.setAttribute(el11, "class", "text-center");
        var el12 = dom.createTextNode("Valutazione");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n										");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        dom.setAttribute(el11, "class", "fit");
        var el12 = dom.createTextNode("\n								  			");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("a");
        dom.setAttribute(el12, "href", "#");
        dom.setAttribute(el12, "class", "btn-link hiddenXXX");
        var el13 = dom.createElement("i");
        dom.setAttribute(el13, "class", "fa fa-cloud-download");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode("\n										");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n									");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n								");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n								");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("tbody");
        var el10 = dom.createTextNode("\n");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("								");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n							");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" \n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "customer-logo");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/images/logo-customer.png");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" \n ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [0, 1, 1]);
        var element7 = dom.childAt(element6, [3, 3, 3, 5, 1]);
        var element8 = dom.childAt(element7, [1, 1, 9, 1]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(element6, [1]), 1, 1);
        morphs[1] = dom.createElementMorph(element8);
        morphs[2] = dom.createMorphAt(dom.childAt(element7, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        return morphs;
      },
      statements: [["inline", "partial", ["layout/menu"], [], ["loc", [null, [5, 4], [5, 29]]]], ["element", "action", ["downloadAll", ["get", "model.scenarios", ["loc", [null, [34, 48], [34, 63]]]]], [], ["loc", [null, [34, 25], [34, 65]]]], ["block", "each", [["get", "model.scenarios", ["loc", [null, [39, 17], [39, 32]]]]], [], 0, 1, ["loc", [null, [39, 9], [103, 18]]]], ["block", "bs-modal", [], ["footer", false, "open", ["subexpr", "@mut", [["get", "showDownloadModal", ["loc", [null, [116, 31], [116, 48]]]]], [], []], "closeAction", ["subexpr", "action", ["closeDownloadModal"], [], ["loc", [null, [116, 61], [116, 90]]]], "backdropClose", false, "elementId", "downloadModal", "title", ["subexpr", "@mut", [["get", "downloadModalTitle", ["loc", [null, [116, 143], [116, 161]]]]], [], []]], 2, null, ["loc", [null, [116, 1], [120, 14]]]], ["inline", "notification-container", [], ["position", "top-right"], ["loc", [null, [122, 1], [122, 48]]]], ["content", "outlet", ["loc", [null, [124, 0], [124, 10]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ttexp/templates/scores", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "ttexp/templates/scores.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "fa fa-home");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 8
              },
              "end": {
                "line": 16,
                "column": 8
              }
            },
            "moduleName": "ttexp/templates/scores.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 20,
                "column": 8
              }
            },
            "moduleName": "ttexp/templates/scores.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("								");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n									");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("%\n								");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element1, 1, 1);
            morphs[1] = dom.createMorphAt(element1, 3, 3);
            return morphs;
          },
          statements: [["content", "score.variableName", ["loc", [null, [18, 9], [18, 31]]]], ["content", "score.percent", ["loc", [null, [18, 37], [18, 54]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 7
            },
            "end": {
              "line": 21,
              "column": 7
            }
          },
          "moduleName": "ttexp/templates/scores.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "score.variableId", ["loc", [null, [15, 14], [15, 30]]]]], [], 0, 1, ["loc", [null, [15, 8], [20, 15]]]]],
        locals: ["score"],
        templates: [child0, child1]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 7
            },
            "end": {
              "line": 29,
              "column": 7
            }
          },
          "moduleName": "ttexp/templates/scores.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("								Raggiunto\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 7
            },
            "end": {
              "line": 31,
              "column": 7
            }
          },
          "moduleName": "ttexp/templates/scores.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("								Mancato\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 57,
                "column": 11
              },
              "end": {
                "line": 61,
                "column": 11
              }
            },
            "moduleName": "ttexp/templates/scores.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("												");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("th");
            var el2 = dom.createTextNode("\n													");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "score-name");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n												");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "score.variableName", ["loc", [null, [59, 37], [59, 59]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 56,
              "column": 10
            },
            "end": {
              "line": 62,
              "column": 10
            }
          },
          "moduleName": "ttexp/templates/scores.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "score.variableId", ["loc", [null, [57, 17], [57, 33]]]]], [], 0, null, ["loc", [null, [57, 11], [61, 18]]]]],
        locals: ["score"],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 68,
                "column": 11
              },
              "end": {
                "line": 72,
                "column": 11
              }
            },
            "moduleName": "ttexp/templates/scores.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("												");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createTextNode("\n													");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n												");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createMorphAt(element0, 0, 0);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["score-vote ", ["get", "score.voteClass", ["loc", [null, [70, 38], [70, 53]]]]]]], ["content", "score.vote", ["loc", [null, [70, 57], [70, 71]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 67,
              "column": 10
            },
            "end": {
              "line": 73,
              "column": 10
            }
          },
          "moduleName": "ttexp/templates/scores.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "score.variableId", ["loc", [null, [68, 17], [68, 33]]]]], [], 0, null, ["loc", [null, [68, 11], [72, 18]]]]],
        locals: ["score"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 91,
            "column": 0
          }
        },
        "moduleName": "ttexp/templates/scores.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("<div id=\"scores-container\" style=\"background-image: url('./assets/images/results-.png');\"></div>");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "scores-container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "main-content");
        dom.setAttribute(el2, "class", "panel panel-default");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "panel-body");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "quadrant-top-left");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "spacer");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "id", "general-score-container");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "spacer");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "id", "objective-container");
        var el8 = dom.createTextNode("\n							Obiettivo");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("br");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "quadrant-top-right");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "spacer");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "id", "hint-container");
        var el8 = dom.createTextNode("\n							Suggerimento");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("br");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "id", "hint-text");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("\n				<div class=\"col-md-6\">\n					<div id=\"hints-container\">Suggerimento</div>\n				</div>\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "quadrant-bottom");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "spacer");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "variables-score-container");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "table-responsive");
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("table");
        var el9 = dom.createTextNode("\n								");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("thead");
        var el10 = dom.createTextNode("\n									");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n");
        dom.appendChild(el10, el11);
        var el11 = dom.createComment("");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("									");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n								");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n								");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("tbody");
        var el10 = dom.createTextNode("\n									");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n");
        dom.appendChild(el10, el11);
        var el11 = dom.createComment("");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("									");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n								");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n							");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n						");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "customer-logo");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/images/logo-customer.png");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [4]);
        var element3 = dom.childAt(element2, [1, 1]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element3, [3, 1, 1, 1, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createAttrMorph(element2, 'class');
        morphs[2] = dom.createMorphAt(dom.childAt(element5, [1, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element5, [3, 1]), 3, 3);
        morphs[4] = dom.createMorphAt(dom.childAt(element4, [3, 1, 1, 3]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(element6, [1, 1]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(element6, [3, 1]), 1, 1);
        morphs[7] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["scenarios"], ["id", "button-close", "class", "btn btn-link ttexp-btn\r\nttexp-position-absolute top-left"], 0, null, ["loc", [null, [2, 0], [5, 12]]]], ["attribute", "class", ["concat", ["show-hints-", ["get", "model.playthrough.scenario.showHints", ["loc", [null, [7, 47], [7, 83]]]]]]], ["block", "each", [["get", "model.playthrough.scores", ["loc", [null, [14, 15], [14, 39]]]]], [], 1, null, ["loc", [null, [14, 7], [21, 16]]]], ["block", "if", [["get", "model.playthrough.success", ["loc", [null, [27, 13], [27, 38]]]]], [], 2, 3, ["loc", [null, [27, 7], [31, 14]]]], ["content", "model.playthrough.hint", ["loc", [null, [39, 27], [39, 53]]]], ["block", "each", [["get", "model.playthrough.scores", ["loc", [null, [56, 18], [56, 42]]]]], [], 4, null, ["loc", [null, [56, 10], [62, 19]]]], ["block", "each", [["get", "model.playthrough.scores", ["loc", [null, [67, 18], [67, 42]]]]], [], 5, null, ["loc", [null, [67, 10], [73, 19]]]], ["content", "outlet", ["loc", [null, [90, 0], [90, 10]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("ttexp/utils/pg-file-system", ["exports", "ember"], function (exports, _ember) {
  var service = _ember["default"].inject.service;
  var RSVP = _ember["default"].RSVP;
  exports["default"] = _ember["default"].Object.extend({

    init: function init() {},

    writeFile: function writeFile(fileEntry, dataObj, isAppend) {
      var self = this;

      return new RSVP.Promise(function (resolve, reject) {

        fileEntry.createWriter(function (fileWriter) {

          fileWriter.onwriteend = function () {
            console.log("Successful file write...");
            if (dataObj.type === "image/png") {
              //self.readBinaryFile(fileEntry);
              // TODO: Non gestito ancora
              reject("Immagini non gestite");
            } else {
              self.readFile(fileEntry).then(function (fileContent) {
                resolve(fileContent);
              }, function (reason) {
                console.log("Error reading file after write");
                console.log(reason);
                reject(reason);
              });
            }
          };

          fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
            reject("Failed file write: " + e.toString());
          };

          // If data object is not passed in, create a new Blob instead.
          if (!dataObj) {
            dataObj = new Blob([{ 'pluto': 12345 }], { type: 'text/plain' });
          }

          fileWriter.write(dataObj);
        });
      });
    },

    readFile: function readFile(fileEntry, initFileContent) {
      var self = this;

      console.log("Start readFile promise");
      return new RSVP.Promise(function (resolve, reject) {
        fileEntry.file(function (file) {
          var reader = new FileReader();

          reader.onloadend = function () {
            console.log("Successful file read:");
            console.log(this);
            console.log(this.result);
            resolve(this.result);
          };

          reader.onerror = function (e) {
            console.log("Failed file read:");
            console.log(e);
            reject(e);
          };

          reader.readAsText(file);
        }, function (reason) {
          console.log("Error reading file, creating missing file");
          console.log(reason);
          reject(reason);
          /*
          
          if (typeof initFileContent === "undefined") {
            initFileContent = "";
          }
          
          self.writeFile(fileEntry, initFileContent).then(function(fileContent) {
            resolve(fileContent);
          }, function(reason) {
            console.log("Error creating missing file");
            console.log(reason);
            reject(reason);
          });
          */
        });
      });
    },

    removeFile: function removeFile(fileEntry) {
      var self = this;

      return new RSVP.Promise(function (resolve, reject) {
        fileEntry.remove(function () {
          // The file has been removed succesfully
          resolve();
        }, function (error) {
          // Error deleting the file
          reject();
        }, function () {
          // The file doesn't exist
          resolve();
        });
      });
    }

  });
});
/*
createFile(dirEntry, fileName, isAppend) {
  // Creates a new file or returns the file if it already exists.
  dirEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {
    writeFile(fileEntry, null, isAppend);
  }, function(e) {
    console.log("Error creating file: " + e.toString());
    reject("Error creating file: " + e.toString());
  });
},
  saveFile(dirEntry, fileData, fileName) {
  dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
    writeFile(fileEntry, fileData);
  }, function(e) {
    console.log("Error saving file");
    console.log(e);
  });
},
  readBinaryFile(fileEntry) {
  fileEntry.file(function (file) {
    var reader = new FileReader();
      reader.onloadend = function() {
      console.log("Successful file write:");
      console.log(this);
      console.log(this.result);
        var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
      //displayImage(blob);
    };
      reader.readAsArrayBuffer(file);
    }, function(e) {
    console.log("Error reading file");
    console.log(e);
  });
},
  createDirectory(rootDirEntry) {
  var self = this;
  rootDirEntry.getDirectory('NewDirInRoot', { create: true }, function (dirEntry) {
    dirEntry.getDirectory('images', { create: true }, function (subDirEntry) {
      self.createFile(subDirEntry, "fileInNewSubDir.txt");
    }, function(e) {
      console.log("Error creating directory");
      console.log(e);
    });
  }, function(e) {
    console.log("Error creating directory");
    console.log(e);
  });
},
*/
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ttexp/config/environment', ['ember'], function(Ember) {
  var prefix = 'ttexp';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ttexp/app")["default"].create({"serverApiUrl":"http://demo.ttexp.net/api","LOG_ACTIVE_GENERATION":false,"LOG_VIEW_LOOKUPS":false,"name":"ttexp","version":"1.0.9+1781e6db"});
}

/* jshint ignore:end */
//# sourceMappingURL=ttexp.map