/**
 * Created by hshen on 6/9/2015.
 */
jest.dontMock('../CheckboxWithLabel');

var {expect}=require('chai');
var {createMockActionContext }=require('fluxible/utils');
var MockService = require('fluxible-plugin-fetchr/utils/MockServiceManager');
var LanguageStore = require('../../public/scripts/stores/LanguageStore');
var LanguageActions = require('../../public/scripts/actions/LanguageActions');

describe('language action',function(){
    var context;

    beforeEach(function(){
        context=createMockActionContext({
            stores:[LanguageStore]
        });
    })

    it('should load lang',function(done){
        context.executeAction(LanguageActions.LoadLang, params, function (err) {
            if (err) {
                return done(err);
            }

            var lang = context.getStore(LanguageStore).getLang();
            expect(lang).to.be.an('string');
            done();
        });
    })
})
