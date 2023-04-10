gdjs.AppleTalksCode = {};
gdjs.AppleTalksCode.GDBackgroundObjects1= [];
gdjs.AppleTalksCode.GDBackgroundObjects2= [];
gdjs.AppleTalksCode.GDBackgroundObjects3= [];
gdjs.AppleTalksCode.GDAppleTalksObjects1= [];
gdjs.AppleTalksCode.GDAppleTalksObjects2= [];
gdjs.AppleTalksCode.GDAppleTalksObjects3= [];
gdjs.AppleTalksCode.GDbodyObjects1= [];
gdjs.AppleTalksCode.GDbodyObjects2= [];
gdjs.AppleTalksCode.GDbodyObjects3= [];
gdjs.AppleTalksCode.GDtextBoxObjects1= [];
gdjs.AppleTalksCode.GDtextBoxObjects2= [];
gdjs.AppleTalksCode.GDtextBoxObjects3= [];
gdjs.AppleTalksCode.GDTalkObjects1= [];
gdjs.AppleTalksCode.GDTalkObjects2= [];
gdjs.AppleTalksCode.GDTalkObjects3= [];
gdjs.AppleTalksCode.GDcursorObjects1= [];
gdjs.AppleTalksCode.GDcursorObjects2= [];
gdjs.AppleTalksCode.GDcursorObjects3= [];
gdjs.AppleTalksCode.GDcursor2Objects1= [];
gdjs.AppleTalksCode.GDcursor2Objects2= [];
gdjs.AppleTalksCode.GDcursor2Objects3= [];
gdjs.AppleTalksCode.GDIntroTextObjects1= [];
gdjs.AppleTalksCode.GDIntroTextObjects2= [];
gdjs.AppleTalksCode.GDIntroTextObjects3= [];
gdjs.AppleTalksCode.GDStuffAppleSaysObjects1= [];
gdjs.AppleTalksCode.GDStuffAppleSaysObjects2= [];
gdjs.AppleTalksCode.GDStuffAppleSaysObjects3= [];
gdjs.AppleTalksCode.GDShitPantsObjects1= [];
gdjs.AppleTalksCode.GDShitPantsObjects2= [];
gdjs.AppleTalksCode.GDShitPantsObjects3= [];
gdjs.AppleTalksCode.GDShitPantsBannerObjects1= [];
gdjs.AppleTalksCode.GDShitPantsBannerObjects2= [];
gdjs.AppleTalksCode.GDShitPantsBannerObjects3= [];
gdjs.AppleTalksCode.GDcircleshingObjects1= [];
gdjs.AppleTalksCode.GDcircleshingObjects2= [];
gdjs.AppleTalksCode.GDcircleshingObjects3= [];
gdjs.AppleTalksCode.GDlampgloObjects1= [];
gdjs.AppleTalksCode.GDlampgloObjects2= [];
gdjs.AppleTalksCode.GDlampgloObjects3= [];

gdjs.AppleTalksCode.conditionTrue_0 = {val:false};
gdjs.AppleTalksCode.condition0IsTrue_0 = {val:false};
gdjs.AppleTalksCode.condition1IsTrue_0 = {val:false};
gdjs.AppleTalksCode.condition2IsTrue_0 = {val:false};


gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDtextBoxObjects1Objects = Hashtable.newFrom({"textBox": gdjs.AppleTalksCode.GDtextBoxObjects1});
gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDTalkObjects2Objects = Hashtable.newFrom({"Talk": gdjs.AppleTalksCode.GDTalkObjects2});
gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDStuffAppleSaysObjects2Objects = Hashtable.newFrom({"StuffAppleSays": gdjs.AppleTalksCode.GDStuffAppleSaysObjects2});
gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDIntroTextObjects2Objects = Hashtable.newFrom({"IntroText": gdjs.AppleTalksCode.GDIntroTextObjects2});
gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDcursorObjects2Objects = Hashtable.newFrom({"cursor": gdjs.AppleTalksCode.GDcursorObjects2});
gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDcursor2Objects2Objects = Hashtable.newFrom({"cursor2": gdjs.AppleTalksCode.GDcursor2Objects2});
gdjs.AppleTalksCode.asyncCallback8671820 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("AppleTalks"), gdjs.AppleTalksCode.GDAppleTalksObjects3);

gdjs.copyArray(runtimeScene.getObjects("circleshing"), gdjs.AppleTalksCode.GDcircleshingObjects3);
{for(var i = 0, len = gdjs.AppleTalksCode.GDAppleTalksObjects3.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDAppleTalksObjects3[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.AppleTalksCode.GDcircleshingObjects3.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDcircleshingObjects3[i].setAnimationName("blink");
}
}}
gdjs.AppleTalksCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.AppleTalksCode.GDAppleTalksObjects2) asyncObjectsList.addObject("AppleTalks", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.AppleTalksCode.asyncCallback8671820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AppleTalksCode.asyncCallback8670108 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("AppleTalks"), gdjs.AppleTalksCode.GDAppleTalksObjects2);
gdjs.copyArray(runtimeScene.getObjects("ShitPantsBanner"), gdjs.AppleTalksCode.GDShitPantsBannerObjects2);
gdjs.AppleTalksCode.GDIntroTextObjects2.length = 0;

gdjs.AppleTalksCode.GDStuffAppleSaysObjects2.length = 0;

gdjs.AppleTalksCode.GDTalkObjects2.length = 0;

gdjs.AppleTalksCode.GDcursorObjects2.length = 0;

gdjs.AppleTalksCode.GDcursor2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDTalkObjects2Objects, 80, 500, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDStuffAppleSaysObjects2Objects, 425, 500, "Menu");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDIntroTextObjects2Objects, 425, 500, "Menu");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDcursorObjects2Objects, 45, 505, "");
}{for(var i = 0, len = gdjs.AppleTalksCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDcursorObjects2[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDcursor2Objects2Objects, 45, 555, "");
}{for(var i = 0, len = gdjs.AppleTalksCode.GDcursor2Objects2.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDcursor2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.AppleTalksCode.GDShitPantsBannerObjects2.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDShitPantsBannerObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.AppleTalksCode.GDAppleTalksObjects2.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDAppleTalksObjects2[i].setAnimationName("Talking");
}
}
{ //Subevents
gdjs.AppleTalksCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.AppleTalksCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.AppleTalksCode.asyncCallback8670108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDTalkObjects1Objects = Hashtable.newFrom({"Talk": gdjs.AppleTalksCode.GDTalkObjects1});
gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDTalkObjects1Objects = Hashtable.newFrom({"Talk": gdjs.AppleTalksCode.GDTalkObjects1});
gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDTalkObjects1Objects = Hashtable.newFrom({"Talk": gdjs.AppleTalksCode.GDTalkObjects1});
gdjs.AppleTalksCode.asyncCallback8674428 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("AppleTalks"), gdjs.AppleTalksCode.GDAppleTalksObjects2);

{for(var i = 0, len = gdjs.AppleTalksCode.GDAppleTalksObjects2.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDAppleTalksObjects2[i].setAnimationName("Idle");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}
gdjs.AppleTalksCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.AppleTalksCode.GDAppleTalksObjects1) asyncObjectsList.addObject("AppleTalks", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.AppleTalksCode.asyncCallback8674428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDShitPantsObjects1Objects = Hashtable.newFrom({"ShitPants": gdjs.AppleTalksCode.GDShitPantsObjects1});
gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDShitPantsObjects1Objects = Hashtable.newFrom({"ShitPants": gdjs.AppleTalksCode.GDShitPantsObjects1});
gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDShitPantsObjects1Objects = Hashtable.newFrom({"ShitPants": gdjs.AppleTalksCode.GDShitPantsObjects1});
gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDShitPantsObjects1Objects = Hashtable.newFrom({"ShitPants": gdjs.AppleTalksCode.GDShitPantsObjects1});
gdjs.AppleTalksCode.asyncCallback8678444 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("ShitPantsBanner"), gdjs.AppleTalksCode.GDShitPantsBannerObjects2);

{for(var i = 0, len = gdjs.AppleTalksCode.GDShitPantsBannerObjects2.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDShitPantsBannerObjects2[i].setAnimationName("Idle");
}
}}
gdjs.AppleTalksCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.AppleTalksCode.GDShitPantsBannerObjects1) asyncObjectsList.addObject("ShitPantsBanner", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AppleTalksCode.asyncCallback8678444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AppleTalksCode.eventsList4 = function(runtimeScene) {

{


gdjs.AppleTalksCode.condition0IsTrue_0.val = false;
{
gdjs.AppleTalksCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.AppleTalksCode.condition0IsTrue_0.val) {
gdjs.AppleTalksCode.GDtextBoxObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDtextBoxObjects1Objects, 20, 475, "Menu");
}{for(var i = 0, len = gdjs.AppleTalksCode.GDtextBoxObjects1.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDtextBoxObjects1[i].playAnimation();
}
}
{ //Subevents
gdjs.AppleTalksCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Talk"), gdjs.AppleTalksCode.GDTalkObjects1);

gdjs.AppleTalksCode.condition0IsTrue_0.val = false;
{
gdjs.AppleTalksCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDTalkObjects1Objects, runtimeScene, true, false);
}if (gdjs.AppleTalksCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.AppleTalksCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.AppleTalksCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Talk"), gdjs.AppleTalksCode.GDTalkObjects1);

gdjs.AppleTalksCode.condition0IsTrue_0.val = false;
{
gdjs.AppleTalksCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDTalkObjects1Objects, runtimeScene, true, true);
}if (gdjs.AppleTalksCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.AppleTalksCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.AppleTalksCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDcursorObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Talk"), gdjs.AppleTalksCode.GDTalkObjects1);

gdjs.AppleTalksCode.condition0IsTrue_0.val = false;
gdjs.AppleTalksCode.condition1IsTrue_0.val = false;
{
gdjs.AppleTalksCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDTalkObjects1Objects, runtimeScene, true, false);
}if ( gdjs.AppleTalksCode.condition0IsTrue_0.val ) {
{
gdjs.AppleTalksCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.AppleTalksCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AppleTalks"), gdjs.AppleTalksCode.GDAppleTalksObjects1);
gdjs.copyArray(runtimeScene.getObjects("IntroText"), gdjs.AppleTalksCode.GDIntroTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("StuffAppleSays"), gdjs.AppleTalksCode.GDStuffAppleSaysObjects1);
{gdjs.evtTools.debuggerTools.log(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1))), "info", "");
}{for(var i = 0, len = gdjs.AppleTalksCode.GDIntroTextObjects1.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDIntroTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.AppleTalksCode.GDAppleTalksObjects1.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDAppleTalksObjects1[i].setAnimationName("Talking");
}
}{for(var i = 0, len = gdjs.AppleTalksCode.GDStuffAppleSaysObjects1.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDStuffAppleSaysObjects1[i].setBBText(gdjs.evtsExt__ArrayTools__GetRandomString.func(runtimeScene, "saythis", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.AppleTalksCode.GDStuffAppleSaysObjects1.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDStuffAppleSaysObjects1[i].setWrappingWidth(780);
}
}
{ //Subevents
gdjs.AppleTalksCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.AppleTalksCode.condition0IsTrue_0.val = false;
{
gdjs.AppleTalksCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 3;
}if (gdjs.AppleTalksCode.condition0IsTrue_0.val) {
gdjs.AppleTalksCode.GDShitPantsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDShitPantsObjects1Objects, 80, 550, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShitPants"), gdjs.AppleTalksCode.GDShitPantsObjects1);

gdjs.AppleTalksCode.condition0IsTrue_0.val = false;
{
gdjs.AppleTalksCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDShitPantsObjects1Objects, runtimeScene, true, false);
}if (gdjs.AppleTalksCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor2"), gdjs.AppleTalksCode.GDcursor2Objects1);
{for(var i = 0, len = gdjs.AppleTalksCode.GDcursor2Objects1.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDcursor2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShitPants"), gdjs.AppleTalksCode.GDShitPantsObjects1);

gdjs.AppleTalksCode.condition0IsTrue_0.val = false;
{
gdjs.AppleTalksCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDShitPantsObjects1Objects, runtimeScene, true, true);
}if (gdjs.AppleTalksCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor2"), gdjs.AppleTalksCode.GDcursor2Objects1);
{for(var i = 0, len = gdjs.AppleTalksCode.GDcursor2Objects1.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDcursor2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShitPants"), gdjs.AppleTalksCode.GDShitPantsObjects1);

gdjs.AppleTalksCode.condition0IsTrue_0.val = false;
gdjs.AppleTalksCode.condition1IsTrue_0.val = false;
{
gdjs.AppleTalksCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AppleTalksCode.mapOfGDgdjs_46AppleTalksCode_46GDShitPantsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.AppleTalksCode.condition0IsTrue_0.val ) {
{
gdjs.AppleTalksCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.AppleTalksCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShitPantsBanner"), gdjs.AppleTalksCode.GDShitPantsBannerObjects1);
{for(var i = 0, len = gdjs.AppleTalksCode.GDShitPantsBannerObjects1.length ;i < len;++i) {
    gdjs.AppleTalksCode.GDShitPantsBannerObjects1[i].setAnimationName("PantShidded");
}
}
{ //Subevents
gdjs.AppleTalksCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.AppleTalksCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AppleTalksCode.GDBackgroundObjects1.length = 0;
gdjs.AppleTalksCode.GDBackgroundObjects2.length = 0;
gdjs.AppleTalksCode.GDBackgroundObjects3.length = 0;
gdjs.AppleTalksCode.GDAppleTalksObjects1.length = 0;
gdjs.AppleTalksCode.GDAppleTalksObjects2.length = 0;
gdjs.AppleTalksCode.GDAppleTalksObjects3.length = 0;
gdjs.AppleTalksCode.GDbodyObjects1.length = 0;
gdjs.AppleTalksCode.GDbodyObjects2.length = 0;
gdjs.AppleTalksCode.GDbodyObjects3.length = 0;
gdjs.AppleTalksCode.GDtextBoxObjects1.length = 0;
gdjs.AppleTalksCode.GDtextBoxObjects2.length = 0;
gdjs.AppleTalksCode.GDtextBoxObjects3.length = 0;
gdjs.AppleTalksCode.GDTalkObjects1.length = 0;
gdjs.AppleTalksCode.GDTalkObjects2.length = 0;
gdjs.AppleTalksCode.GDTalkObjects3.length = 0;
gdjs.AppleTalksCode.GDcursorObjects1.length = 0;
gdjs.AppleTalksCode.GDcursorObjects2.length = 0;
gdjs.AppleTalksCode.GDcursorObjects3.length = 0;
gdjs.AppleTalksCode.GDcursor2Objects1.length = 0;
gdjs.AppleTalksCode.GDcursor2Objects2.length = 0;
gdjs.AppleTalksCode.GDcursor2Objects3.length = 0;
gdjs.AppleTalksCode.GDIntroTextObjects1.length = 0;
gdjs.AppleTalksCode.GDIntroTextObjects2.length = 0;
gdjs.AppleTalksCode.GDIntroTextObjects3.length = 0;
gdjs.AppleTalksCode.GDStuffAppleSaysObjects1.length = 0;
gdjs.AppleTalksCode.GDStuffAppleSaysObjects2.length = 0;
gdjs.AppleTalksCode.GDStuffAppleSaysObjects3.length = 0;
gdjs.AppleTalksCode.GDShitPantsObjects1.length = 0;
gdjs.AppleTalksCode.GDShitPantsObjects2.length = 0;
gdjs.AppleTalksCode.GDShitPantsObjects3.length = 0;
gdjs.AppleTalksCode.GDShitPantsBannerObjects1.length = 0;
gdjs.AppleTalksCode.GDShitPantsBannerObjects2.length = 0;
gdjs.AppleTalksCode.GDShitPantsBannerObjects3.length = 0;
gdjs.AppleTalksCode.GDcircleshingObjects1.length = 0;
gdjs.AppleTalksCode.GDcircleshingObjects2.length = 0;
gdjs.AppleTalksCode.GDcircleshingObjects3.length = 0;
gdjs.AppleTalksCode.GDlampgloObjects1.length = 0;
gdjs.AppleTalksCode.GDlampgloObjects2.length = 0;
gdjs.AppleTalksCode.GDlampgloObjects3.length = 0;

gdjs.AppleTalksCode.eventsList4(runtimeScene);

return;

}

gdjs['AppleTalksCode'] = gdjs.AppleTalksCode;
