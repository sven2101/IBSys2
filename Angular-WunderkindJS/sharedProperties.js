ppsApp.service('sharedProperties', function() {
    var p1Direktverkauf = 0;
    var p2Direktverkauf = 0;
    var p3Direktverkauf = 0;
    var a1InputValue = 0;
    var q1InputValue = 0;
    var m1selectedOption = 0;
    var a2InputValue = 0;
    var q2InputValue = 0;
    var m2selectedOption = 0;
    var a3InputValue = 0;
    var q3InputValue = 0;
    var m3selectedOption = 0;
    var a4InputValue = 0;
    var q4InputValue = 0;
    var m4selectedOption = 0;
    var a5InputValue = 0;
    var q5InputValue = 0;
    var m5selectedOption = 0;
    var a6InputValue = 0;
    var q6InputValue = 0;
    var m6selectedOption = 0;
    var a7InputValue = 0;
    var q7InputValue = 0;
    var m7selectedOption = 0;
    var a8InputValue = 0;
    var q8InputValue = 0;
    var m8selectedOption = 0;
    var a9InputValue = 0;
    var q9InputValue = 0;
    var m9selectedOption = 0;
    var a10InputValue = 0;
    var q10InputValue = 0;
    var m10selectedOption = 0;
    var a11InputValue = 0;
    var q11InputValue = 0;
    var m11selectedOption = 0;
    var a12InputValue = 0;
    var q12InputValue = 0;
    var m12selectedOption = 0;
    var a13InputValue = 0;
    var q13InputValue = 0;
    var m13selectedOption = 0;
    var a14InputValue = 0;
    var q14InputValue = 0;
    var m14selectedOption = 0;
    var a15InputValue = 0;
    var q15InputValue = 0;
    var m15selectedOption = 0;
    var a16InputValue = 0;
    var q16InputValue = 0;
    var m16selectedOption = 0;
    var a17InputValue = 0;
    var q17InputValue = 0;
    var m17selectedOption = 0;
    var a18InputValue = 0;
    var q18InputValue = 0;
    var m18selectedOption = 0;
    var a19InputValue = 0;
    var q19InputValue = 0;
    var m19selectedOption = 0;
    var a20InputValue = 0;
    var q20InputValue = 0;
    var m20selectedOption = 0;
    var a21InputValue = 0;
    var q21InputValue = 0;
    var m21selectedOption = 0;
    var a22InputValue = 0;
    var q22InputValue = 0;
    var m22selectedOption = 0;
    var a23InputValue = 0;
    var q23InputValue = 0;
    var m23selectedOption = 0;
    var a24InputValue = 0;
    var q24InputValue = 0;
    var m24selectedOption = 0;
    var a25InputValue = 0;
    var q25InputValue = 0;
    var m25selectedOption = 0;
    var a26InputValue = 0;
    var q26InputValue = 0;
    var m26selectedOption = 0;
    var a27InputValue = 0;
    var q27InputValue = 0;
    var m27selectedOption = 0;
    var a28InputValue = 0;
    var q28InputValue = 0;
    var m28selectedOption = 0;
    var a29InputValue = 0;
    var q29InputValue = 0;
    var m29selectedOption = 0;
    var a30InputValue = 0;
    var q30InputValue = 0;
    var m30selectedOption = 0;
    var p1InputValue = 0;
    var p2InputValue = 0;
    var p3InputValue = 0;
    var p1DirektMengeValue = 0;
    var p1DirektPreisValue = 0;
    var p1DirektKonvetionalstrafeValue = 0;
    var p2DirektMengeValue = 0;
    var p2DirektPreisValue = 0;
    var p2DirektKonvetionalstrafeValue = 0;
    var p3DirektMengeValue = 0;
    var p3DirektPreisValue = 0;
    var p3DirektKonvetionalstrafeValue = 0;
    var fq1InputValue = 0;
    var fq2InputValue = 0;
    var fq3InputValue = 0;
    var fq4InputValue = 0;
    var fq5InputValue = 0;
    var fq6InputValue = 0;
    var fq7InputValue = 0;
    var fq8InputValue = 0;
    var fq9InputValue = 0;
    var fq10InputValue = 0;
    var fq11InputValue = 0;
    var fq12InputValue = 0;
    var fq13InputValue = 0;
    var fq14InputValue = 0;
    var fq15InputValue = 0;
    var fq16InputValue = 0;
    var fq17InputValue = 0;
    var fq18InputValue = 0;
    var fq19InputValue = 0;
    var fq20InputValue = 0;
    var fq21InputValue = 0;
    var fq22InputValue = 0;
    var fq23InputValue = 0;
    var fq24InputValue = 0;
    var fq25InputValue = 0;
    var fq26InputValue = 0;
    var fq27InputValue = 0;
    var fq28InputValue = 0;
    var fq29InputValue = 0;
    var fq30InputValue = 0;
    var fa31InputValue = 0;
    var fa32InputValue = 0;
    var fa33InputValue = 0;
    var fa34InputValue = 0;
    var fa35InputValue = 0;
    var fa36InputValue = 0;
    var fa37InputValue = 0;
    var fa38InputValue = 0;
    var fa39InputValue = 0;
    var fa40InputValue = 0;
    var fa41InputValue = 0;
    var fa42InputValue = 0;
    var fa43InputValue = 0;
    var fa44InputValue = 0;
    var fa45InputValue = 0;
    var fa46InputValue = 0;
    var fa47InputValue = 0;
    var fa48InputValue = 0;
    var fa49InputValue = 0;
    var fa50InputValue = 0;
    var fa51InputValue = 0;
    var fa52InputValue = 0;
    var fa53InputValue = 0;
    var fa54InputValue = 0;
    var fa55InputValue = 0;
    var fa56InputValue = 0;
    var fa57InputValue = 0;
    var fa58InputValue = 0;
    var fa59InputValue = 0;
    var fa60InputValue = 0;
    var fq31InputValue = 0;
    var fq32InputValue = 0;
    var fq33InputValue = 0;
    var fq34InputValue = 0;
    var fq35InputValue = 0;
    var fq36InputValue = 0;
    var fq37InputValue = 0;
    var fq38InputValue = 0;
    var fq39InputValue = 0;
    var fq40InputValue = 0;
    var fq41InputValue = 0;
    var fq42InputValue = 0;
    var fq43InputValue = 0;
    var fq44InputValue = 0;
    var fq45InputValue = 0;
    var fq46InputValue = 0;
    var fq47InputValue = 0;
    var fq48InputValue = 0;
    var fq49InputValue = 0;
    var fq50InputValue = 0;
    var fq51InputValue = 0;
    var fq52InputValue = 0;
    var fq53InputValue = 0;
    var fq54InputValue = 0;
    var fq55InputValue = 0;
    var fq56InputValue = 0;
    var fq57InputValue = 0;
    var fq58InputValue = 0;
    var fq59InputValue = 0;
    var fq60InputValue = 0;
    var periodValue = 0;
    var p1_2PlanValue = 0;
    var p2_2PlanValue = 0;
    var p3_2PlanValue = 0;
    var p1_3PlanValue = 0;
    var p2_3PlanValue = 0;
    var p3_3PlanValue = 0;
    var p1_4PlanValue = 0;
    var p2_4PlanValue = 0;
    var p3_4PlanValue = 0;
    var p1Value = 0;
    var p2Value = 0;
    var p3Value = 0;
    var k4Value = 0;
    var d5Value = 0;
    var h6Value = 0;
    var k7Value = 0;
    var d8Value = 0;
    var h9Value = 0;
    var k10Value = 0;
    var d11Value = 0;
    var h12Value = 0;
    var k13Value = 0;
    var d14Value = 0;
    var h15Value = 0;
    var kdh16Value = 0;
    var kdh17Value = 0;
    var k18Value = 0;
    var d19Value = 0;
    var h20Value = 0;
    var kdh26Value = 0;
    var k49Value = 0;
    var d54Value = 0;
    var h29Value = 0;
    var k50Value = 0;
    var d55Value = 0;
    var h30Value = 0;
    var k51Value = 0;
    var d56Value = 0;
    var h31Value = 0;
    var k21IstLagerbestandValue = 0;
    var k22IstLagerbestandValue = 0;
    var k23IstLagerbestandValue = 0;
    var k24IstLagerbestandValue = 0;
    var k25IstLagerbestandValue = 0;
    var k27IstLagerbestandValue = 0;
    var k28IstLagerbestandValue = 0;
    var k32IstLagerbestandValue = 0;
    var k33IstLagerbestandValue = 0;
    var k34IstLagerbestandValue = 0;
    var k35IstLagerbestandValue = 0;
    var k36IstLagerbestandValue = 0;
    var k37IstLagerbestandValue = 0;
    var k38IstLagerbestandValue = 0;
    var k39IstLagerbestandValue = 0;
    var k40IstLagerbestandValue = 0;
    var k41IstLagerbestandValue = 0;
    var k42IstLagerbestandValue = 0;
    var k43IstLagerbestandValue = 0;
    var k44IstLagerbestandValue = 0;
    var k45IstLagerbestandValue = 0;
    var k46IstLagerbestandValue = 0;
    var k47IstLagerbestandValue = 0;
    var k48IstLagerbestandValue = 0;
    var k52IstLagerbestandValue = 0;
    var k53IstLagerbestandValue = 0;
    var k57IstLagerbestandValue = 0;
    var k58IstLagerbestandValue = 0;
    var k59IstLagerbestandValue = 0;
    var k21PlanLagerbestandValue = 0;
    var k21_1PlanLagerbestandValue = 0;
    var k22PlanLagerbestandValue = 0;
    var k22_1PlanLagerbestandValue = 0;
    var k23PlanLagerbestandValue = 0;
    var k24PlanLagerbestandValue = 0;
    var k24_1PlanLagerbestandValue = 0;
    var k24_2PlanLagerbestandValue = 0;
    var k25PlanLagerbestandValue = 0;
    var k27PlanLagerbestandValue = 0;
    var k28PlanLagerbestandValue = 0;
    var k28_1PlanLagerbestandValue = 0;
    var k32PlanLagerbestandValue = 0;
    var k32_1PlanLagerbestandValue = 0;
    var k33PlanLagerbestandValue = 0;
    var k33_1PlanLagerbestandValue = 0;
    var k34PlanLagerbestandValue = 0;
    var k35PlanLagerbestandValue = 0;
    var k35_1PlanLagerbestandValue = 0;
    var k36PlanLagerbestandValue = 0;
    var k37PlanLagerbestandValue = 0;
    var k38PlanLagerbestandValue = 0;
    var k38_1PlanLagerbestandValue = 0;
    var k39PlanLagerbestandValue = 0;
    var k40PlanLagerbestandValue = 0;
    var k40_1PlanLagerbestandValue = 0;
    var k41PlanLagerbestandValue = 0;
    var k42PlanLagerbestandValue = 0;
    var k43PlanLagerbestandValue = 0;
    var k43_1PlanLagerbestandValue = 0;
    var k44PlanLagerbestandValue = 0;
    var k45PlanLagerbestandValue = 0;
    var k45_1PlanLagerbestandValue = 0;
    var k46PlanLagerbestandValue = 0;
    var k47PlanLagerbestandValue = 0;
    var k48PlanLagerbestandValue = 0;
    var k52PlanLagerbestandValue = 0;
    var k52_1PlanLagerbestandValue = 0;
    var k53PlanLagerbestandValue = 0;
    var k53_1PlanLagerbestandValue = 0;
    var k57PlanLagerbestandValue = 0;
    var k57_1PlanLagerbestandValue = 0;
    var k58PlanLagerbestandValue = 0;
    var k58_1PlanLagerbestandValue = 0;
    var k59PlanLagerbestandValue = 0;
    var e16IstLagerbestandValue = 0;
    var e17IstLagerbestandValue = 0;
    var e26IstLagerbestandValue = 0;
    var e17BearbeitungValue = 0;
    var e16BearbeitungValue = 0;
    var e26BearbeitungValue = 0;
    var e17WarteschlangeValue = 0;
    var e16WarteschlangeValue = 0;
    var e26WarteschlangeValue = 0;
    var p1AbsatzValue = 0;
    var p1PlanLagerbestandValue = 0;
    var p1IstLagerbestandValue = 0;
    var p1WarteschlangeValue = 0;
    var p1BearbeitungValue = 0;
    var e26_1PlanValue = 0;
    var e26_1PlanLagerbestandValue = 0;
    var e26_1IstLagerbestandValue = 0;
    var e26_1WarteschlangeValue = 0;
    var e26_1BearbeitungValue = 0;
    var e51PlanValue = 0;
    var e51PlanLagerbestandValue = 0;
    var e51IstLagerbestandValue = 0;
    var e51WarteschlangeValue = 0;
    var e51BearbeitungValue = 0;
    var e16_1PlanValue = 0;
    var e16_1PlanLagerbestandValue = 0;
    var e16_1IstLagerbestandValue = 0;
    var e16_1WarteschlangeValue = 0;
    var e16_1BearbeitungValue = 0;
    var e17_1PlanValue = 0;
    var e17_1PlanLagerbestandValue = 0;
    var e17_1IstLagerbestandValue = 0;
    var e17_1WarteschlangeValue = 0;
    var e17_1BearbeitungValue = 0;
    var e50PlanValue = 0;
    var e50PlanLagerbestandValue = 0;
    var e50IstLagerbestandValue = 0;
    var e50WarteschlangeValue = 0;
    var e50BearbeitungValue = 0;
    var e4PlanValue = 0;
    var e4PlanLagerbestandValue = 0;
    var e4IstLagerbestandValue = 0;
    var e4WarteschlangeValue = 0;
    var e4BearbeitungValue = 0;
    var e10PlanValue = 0;
    var e10PlanLagerbestandValue = 0;
    var e10IstLagerbestandValue = 0;
    var e10WarteschlangeValue = 0;
    var e10BearbeitungValue = 0;
    var e49PlanValue = 0;
    var e49PlanLagerbestandValue = 0;
    var e49IstLagerbestandValue = 0;
    var e49WarteschlangeValue = 0;
    var e49BearbeitungValue = 0;
    var e7PlanValue = 0;
    var e7PlanLagerbestandValue = 0;
    var e7IstLagerbestandValue = 0;
    var e7WarteschlangeValue = 0;
    var e7BearbeitungValue = 0;
    var e13PlanValue = 0;
    var e13PlanLagerbestandValue = 0;
    var e13IstLagerbestandValue = 0;
    var e13WarteschlangeValue = 0;
    var e13BearbeitungValue = 0;
    var e18PlanValue = 0;
    var e18PlanLagerbestandValue = 0;
    var e18IstLagerbestandValue = 0;
    var e18WarteschlangeValue = 0;
    var e18BearbeitungValue = 0;
    var p2AbsatzValue = 0;
    var p2PlanLagerbestandValue = 0;
    var p2IstLagerbestandValue = 0;
    var p2WarteschlangeValue = 0;
    var p2BearbeitungValue = 0;
    var e26_2PlanValue = 0;
    var e26_2PlanLagerbestandValue = 0;
    var e26_2IstLagerbestandValue = 0;
    var e26_2WarteschlangeValue = 0;
    var e26_2BearbeitungValue = 0;
    var e56PlanValue = 0;
    var e56PlanLagerbestandValue = 0;
    var e56IstLagerbestandValue = 0;
    var e56WarteschlangeValue = 0;
    var e56BearbeitungValue = 0;
    var e16_2PlanValue = 0;
    var e16_2PlanLagerbestandValue = 0;
    var e16_2IstLagerbestandValue = 0;
    var e16_2WarteschlangeValue = 0;
    var e16_2BearbeitungValue = 0;
    var e17_2PlanValue = 0;
    var e17_2PlanLagerbestandValue = 0;
    var e17_2IstLagerbestandValue = 0;
    var e17_2WarteschlangeValue = 0;
    var e17_2BearbeitungValue = 0;
    var e55PlanValue = 0;
    var e55PlanLagerbestandValue = 0;
    var e55IstLagerbestandValue = 0;
    var e55WarteschlangeValue = 0;
    var e55BearbeitungValue = 0;
    var e5PlanValue = 0;
    var e5PlanLagerbestandValue = 0;
    var e5IstLagerbestandValue = 0;
    var e5WarteschlangeValue = 0;
    var e5BearbeitungValue = 0;
    var e11PlanValue = 0;
    var e11PlanLagerbestandValue = 0;
    var e11IstLagerbestandValue = 0;
    var e11WarteschlangeValue = 0;
    var e11BearbeitungValue = 0;
    var e54PlanValue = 0;
    var e54PlanLagerbestandValue = 0;
    var e54IstLagerbestandValue = 0;
    var e54WarteschlangeValue = 0;
    var e54BearbeitungValue = 0;
    var e8PlanValue = 0;
    var e8PlanLagerbestandValue = 0;
    var e8IstLagerbestandValue = 0;
    var e8WarteschlangeValue = 0;
    var e8BearbeitungValue = 0;
    var e14PlanValue = 0;
    var e14PlanLagerbestandValue = 0;
    var e14IstLagerbestandValue = 0;
    var e14WarteschlangeValue = 0;
    var e14BearbeitungValue = 0;
    var e19PlanValue = 0;
    var e19PlanLagerbestandValue = 0;
    var e19IstLagerbestandValue = 0;
    var e19WarteschlangeValue = 0;
    var e19BearbeitungValue = 0;
    var p3AbsatzValue = 0;
    var p3PlanLagerbestandValue = 0;
    var p3IstLagerbestandValue = 0;
    var p3WarteschlangeValue = 0;
    var p3BearbeitungValue = 0;
    var e26_3PlanValue = 0;
    var e26_3PlanLagerbestandValue = 0;
    var e26_3IstLagerbestandValue = 0;
    var e26_3WarteschlangeValue = 0;
    var e26_3BearbeitungValue = 0;
    var e31PlanValue = 0;
    var e31PlanLagerbestandValue = 0;
    var e31IstLagerbestandValue = 0;
    var e31WarteschlangeValue = 0;
    var e31BearbeitungValue = 0;
    var e16_3PlanValue = 0;
    var e16_3PlanLagerbestandValue = 0;
    var e16_3IstLagerbestandValue = 0;
    var e16_3WarteschlangeValue = 0;
    var e16_3BearbeitungValue = 0;
    var e17_3PlanValue = 0;
    var e17_3PlanLagerbestandValue = 0;
    var e17_3IstLagerbestandValue = 0;
    var e17_3WarteschlangeValue = 0;
    var e17_3BearbeitungValue = 0;
    var e30PlanValue = 0;
    var e30PlanLagerbestandValue = 0;
    var e30IstLagerbestandValue = 0;
    var e30WarteschlangeValue = 0;
    var e30BearbeitungValue = 0;
    var e6PlanValue = 0;
    var e6PlanLagerbestandValue = 0;
    var e6IstLagerbestandValue = 0;
    var e6WarteschlangeValue = 0;
    var e6BearbeitungValue = 0;
    var e12PlanValue = 0;
    var e12PlanLagerbestandValue = 0;
    var e12IstLagerbestandValue = 0;
    var e12WarteschlangeValue = 0;
    var e12BearbeitungValue = 0;
    var e29PlanValue = 0;
    var e29PlanLagerbestandValue = 0;
    var e29IstLagerbestandValue = 0;
    var e29WarteschlangeValue = 0;
    var e29BearbeitungValue = 0;
    var e9PlanValue = 0;
    var e9PlanLagerbestandValue = 0;
    var e9IstLagerbestandValue = 0;
    var e9WarteschlangeValue = 0;
    var e9BearbeitungValue = 0;
    var e15PlanValue = 0;
    var e15PlanLagerbestandValue = 0;
    var e15IstLagerbestandValue = 0;
    var e15WarteschlangeValue = 0;
    var e15BearbeitungValue = 0;
    var e20PlanValue = 0;
    var e20PlanLagerbestandValue = 0;
    var e20IstLagerbestandValue = 0;
    var e20WarteschlangeValue = 0;
    var e20BearbeitungValue = 0;
    var k21BestellungMode = 0;
    var k21BestellungValue = 0;
    var k22BestellungMode = 0;
    var k22BestellungValue = 0;
    var k23BestellungMode = 0;
    var k23BestellungValue = 0;
    var k24BestellungMode = 0;
    var k24BestellungValue = 0;
    var k25BestellungMode = 0;
    var k25BestellungValue = 0;
    var k27BestellungMode = 0;
    var k27BestellungValue = 0;
    var k28BestellungMode = 0;
    var k28BestellungValue = 0;
    var k32BestellungMode = 0;
    var k32BestellungValue = 0;
    var k33BestellungMode = 0;
    var k33BestellungValue = 0;
    var k34BestellungMode = 0;
    var k34BestellungValue = 0;
    var k35BestellungMode = 0;
    var k35BestellungValue = 0;
    var k36BestellungMode = 0;
    var k36BestellungValue = 0;
    var k37BestellungMode = 0;
    var k37BestellungValue = 0;
    var k38BestellungMode = 0;
    var k38BestellungValue = 0;
    var k39BestellungMode = 0;
    var k39BestellungValue = 0;
    var k40BestellungMode = 0;
    var k40BestellungValue = 0;
    var k41BestellungValue = 0;
    var k41BestellungMode = 0;
    var k42BestellungValue = 0;
    var k42BestellungMode = 0;
    var k43BestellungValue = 0;
    var k43BestellungMode = 0;
    var k44BestellungValue = 0;
    var k44BestellungMode = 0;
    var k45BestellungValue = 0;
    var k45BestellungMode = 0;
    var k46BestellungValue = 0;
    var k46BestellungMode = 0;
    var k47BestellungValue = 0;
    var k47BestellungMode = 0;
    var k48BestellungValue = 0;
    var k48BestellungMode = 0;
    var k52BestellungValue = 0;
    var k52BestellungMode = 0;
    var k53BestellungValue = 0;
    var k53BestellungMode = 0;
    var k57BestellungValue = 0;
    var k57BestellungMode = 0;
    var k58BestellungValue = 0;
    var k58BestellungMode = 0;
    var k59BestellungValue = 0;
    var k59BestellungMode = 0;
    var w1TimeValue = 0;
    var w2TimeValue = 0;
    var w3TimeValue = 0;
    var w4TimeValue = 0;
    var w6TimeValue = 0;
    var w7TimeValue = 0;
    var w8TimeValue = 0;
    var w9TimeValue = 0;
    var w10TimeValue = 0;
    var w11TimeValue = 0;
    var w12TimeValue = 0;
    var w13TimeValue = 0;
    var w14TimeValue = 0;
    var w15TimeValue = 0;
    var w1OrderTimeValue = 0;
    var w2OrderTimeValue = 0;
    var w3OrderTimeValue = 0;
    var w4OrderTimeValue = 0;
    var w6OrderTimeValue = 0;
    var w7OrderTimeValue = 0;
    var w8OrderTimeValue = 0;
    var w9OrderTimeValue = 0;
    var w10OrderTimeValue = 0;
    var w11OrderTimeValue = 0;
    var w12OrderTimeValue = 0;
    var w13OrderTimeValue = 0;
    var w14OrderTimeValue = 0;
    var w15OrderTimeValue = 0;
    var schicht1Value = 0;
    var schicht2Value = 0;
    var schicht3Value = 0;
    var schicht4Value = 0;
    var schicht6Value = 0;
    var schicht7Value = 0;
    var schicht8Value = 0;
    var schicht9Value = 0;
    var schicht10Value = 0;
    var schicht11Value = 0;
    var schicht12Value = 0;
    var schicht13Value = 0;
    var schicht14Value = 0;
    var schicht15Value = 0;
    var ueberstunden1Value = 0;
    var ueberstunden2Value = 0;
    var ueberstunden3Value = 0;
    var ueberstunden4Value = 0;
    var ueberstunden6Value = 0;
    var ueberstunden7Value = 0;
    var ueberstunden8Value = 0;
    var ueberstunden9Value = 0;
    var ueberstunden10Value = 0;
    var ueberstunden11Value = 0;
    var ueberstunden12Value = 0;
    var ueberstunden13Value = 0;
    var ueberstunden14Value = 0;
    var ueberstunden15Value = 0;
    var schichtZ1Value = 0;
    var schichtZ2Value = 0;
    var schichtZ3Value = 0;
    var schichtZ4Value = 0;
    var schichtZ6Value = 0;
    var schichtZ7Value = 0;
    var schichtZ8Value = 0;
    var schichtZ9Value = 0;
    var schichtZ10Value = 0;
    var schichtZ11Value = 0;
    var schichtZ12Value = 0;
    var schichtZ13Value = 0;
    var schichtZ14Value = 0;
    var schichtZ15Value = 0;
    var ueberstundenZ1Value = 0;
    var ueberstundenZ2Value = 0;
    var ueberstundenZ3Value = 0;
    var ueberstundenZ4Value = 0;
    var ueberstundenZ6Value = 0;
    var ueberstundenZ7Value = 0;
    var ueberstundenZ8Value = 0;
    var ueberstundenZ9Value = 0;
    var ueberstundenZ10Value = 0;
    var ueberstundenZ11Value = 0;
    var ueberstundenZ12Value = 0;
    var ueberstundenZ13Value = 0;
    var ueberstundenZ14Value = 0;
    var ueberstundenZ15Value = 0;
    var LanguageValue = "DE";
    var FirstUpdateValue = 0;


    return {
        resetValues: function() {
             p1Direktverkauf = 0;
             p2Direktverkauf = 0;
             p3Direktverkauf = 0;
             a1InputValue = 0;
             q1InputValue = 0;
             m1selectedOption = 0;
             a2InputValue = 0;
             q2InputValue = 0;
             m2selectedOption = 0;
             a3InputValue = 0;
             q3InputValue = 0;
             m3selectedOption = 0;
             a4InputValue = 0;
             q4InputValue = 0;
             m4selectedOption = 0;
             a5InputValue = 0;
             q5InputValue = 0;
             m5selectedOption = 0;
             a6InputValue = 0;
             q6InputValue = 0;
             m6selectedOption = 0;
             a7InputValue = 0;
             q7InputValue = 0;
             m7selectedOption = 0;
             a8InputValue = 0;
             q8InputValue = 0;
             m8selectedOption = 0;
             a9InputValue = 0;
             q9InputValue = 0;
             m9selectedOption = 0;
             a10InputValue = 0;
             q10InputValue = 0;
             m10selectedOption = 0;
             a11InputValue = 0;
             q11InputValue = 0;
             m11selectedOption = 0;
             a12InputValue = 0;
             q12InputValue = 0;
             m12selectedOption = 0;
             a13InputValue = 0;
             q13InputValue = 0;
             m13selectedOption = 0;
             a14InputValue = 0;
             q14InputValue = 0;
             m14selectedOption = 0;
             a15InputValue = 0;
             q15InputValue = 0;
             m15selectedOption = 0;
             a16InputValue = 0;
             q16InputValue = 0;
             m16selectedOption = 0;
             a17InputValue = 0;
             q17InputValue = 0;
             m17selectedOption = 0;
             a18InputValue = 0;
             q18InputValue = 0;
             m18selectedOption = 0;
             a19InputValue = 0;
             q19InputValue = 0;
             m19selectedOption = 0;
             a20InputValue = 0;
             q20InputValue = 0;
             m20selectedOption = 0;
             a21InputValue = 0;
             q21InputValue = 0;
             m21selectedOption = 0;
             a22InputValue = 0;
             q22InputValue = 0;
             m22selectedOption = 0;
             a23InputValue = 0;
             q23InputValue = 0;
             m23selectedOption = 0;
             a24InputValue = 0;
             q24InputValue = 0;
             m24selectedOption = 0;
             a25InputValue = 0;
             q25InputValue = 0;
             m25selectedOption = 0;
             a26InputValue = 0;
             q26InputValue = 0;
             m26selectedOption = 0;
             a27InputValue = 0;
             q27InputValue = 0;
             m27selectedOption = 0;
             a28InputValue = 0;
             q28InputValue = 0;
             m28selectedOption = 0;
             a29InputValue = 0;
             q29InputValue = 0;
             m29selectedOption = 0;
             a30InputValue = 0;
             q30InputValue = 0;
             m30selectedOption = 0;
             p1InputValue = 0;
             p2InputValue = 0;
             p3InputValue = 0;
             p1DirektMengeValue = 0;
             p1DirektPreisValue = 0;
             p1DirektKonvetionalstrafeValue = 0;
             p2DirektMengeValue = 0;
             p2DirektPreisValue = 0;
             p2DirektKonvetionalstrafeValue = 0;
             p3DirektMengeValue = 0;
             p3DirektPreisValue = 0;
             p3DirektKonvetionalstrafeValue = 0;
             fq1InputValue = 0;
             fq2InputValue = 0;
             fq3InputValue = 0;
             fq4InputValue = 0;
             fq5InputValue = 0;
             fq6InputValue = 0;
             fq7InputValue = 0;
             fq8InputValue = 0;
             fq9InputValue = 0;
             fq10InputValue = 0;
             fq11InputValue = 0;
             fq12InputValue = 0;
             fq13InputValue = 0;
             fq14InputValue = 0;
             fq15InputValue = 0;
             fq16InputValue = 0;
             fq17InputValue = 0;
             fq18InputValue = 0;
             fq19InputValue = 0;
             fq20InputValue = 0;
             fq21InputValue = 0;
             fq22InputValue = 0;
             fq23InputValue = 0;
             fq24InputValue = 0;
             fq25InputValue = 0;
             fq26InputValue = 0;
             fq27InputValue = 0;
             fq28InputValue = 0;
             fq29InputValue = 0;
             fq30InputValue = 0;
             fa31InputValue = 0;
             fa32InputValue = 0;
             fa33InputValue = 0;
             fa34InputValue = 0;
             fa35InputValue = 0;
             fa36InputValue = 0;
             fa37InputValue = 0;
             fa38InputValue = 0;
             fa39InputValue = 0;
             fa40InputValue = 0;
             fq31InputValue = 0;
             fq32InputValue = 0;
             fq33InputValue = 0;
             fq34InputValue = 0;
             fq35InputValue = 0;
             fq36InputValue = 0;
             fq37InputValue = 0;
             fq38InputValue = 0;
             fq39InputValue = 0;
             fq40InputValue = 0;
             fq41InputValue = 0;
             fq42InputValue = 0;
             fq43InputValue = 0;
             fq44InputValue = 0;
             fq45InputValue = 0;
             fq46InputValue = 0;
             fq47InputValue = 0;
             fq48InputValue = 0;
             fq49InputValue = 0;
             fq50InputValue = 0;
             fq51InputValue = 0;
             fq52InputValue = 0;
             fq53InputValue = 0;
             fq54InputValue = 0;
             fq55InputValue = 0;
             fq56InputValue = 0;
             fq57InputValue = 0;
             fq58InputValue = 0;
             fq59InputValue = 0;
             fq60InputValue = 0;
             fa41InputValue = 0;
             fa42InputValue = 0;
             fa43InputValue = 0;
             fa44InputValue = 0;
             fa45InputValue = 0;
             fa46InputValue = 0;
             fa47InputValue = 0;
             fa48InputValue = 0;
             fa49InputValue = 0;
             fa50InputValue = 0;
             fa51InputValue = 0;
             fa52InputValue = 0;
             fa53InputValue = 0;
             fa54InputValue = 0;
             fa55InputValue = 0;
             fa56InputValue = 0;
             fa57InputValue = 0;
             fa58InputValue = 0;
             fa59InputValue = 0;
             fa60InputValue = 0;
             periodValue = 0;
             p1_2PlanValue = 0;
             p2_2PlanValue = 0;
             p3_2PlanValue = 0;
             p1_3PlanValue = 0;
             p2_3PlanValue = 0;
             p3_3PlanValue = 0;
             p1_4PlanValue = 0;
             p2_4PlanValue = 0;
             p3_4PlanValue = 0;
             p1Value = 0;
             p2Value = 0;
             p3Value = 0;
             k4Value = 0;
             d5Value = 0;
             h6Value = 0;
             k7Value = 0;
             d8Value = 0;
             h9Value = 0;
             k10Value = 0;
             d11Value = 0;
             h12Value = 0;
             k13Value = 0;
             d14Value = 0;
             h15Value = 0;
             kdh16Value = 0;
             kdh17Value = 0;
             k18Value = 0;
             d19Value = 0;
             h20Value = 0;
             kdh26Value = 0;
             k49Value = 0;
             d54Value = 0;
             h29Value = 0;
             k50Value = 0;
             d55Value = 0;
             h30Value = 0;
             k51Value = 0;
             d56Value = 0;
             h31Value = 0;
             k21IstLagerbestandValue = 0;
             k22IstLagerbestandValue = 0;
             k23IstLagerbestandValue = 0;
             k24IstLagerbestandValue = 0;
             k25IstLagerbestandValue = 0;
             k27IstLagerbestandValue = 0;
             k28IstLagerbestandValue = 0;
             k32IstLagerbestandValue = 0;
             k33IstLagerbestandValue = 0;
             k34IstLagerbestandValue = 0;
             k35IstLagerbestandValue = 0;
             k36IstLagerbestandValue = 0;
             k37IstLagerbestandValue = 0;
             k38IstLagerbestandValue = 0;
             k39IstLagerbestandValue = 0;
             k40IstLagerbestandValue = 0;
             k41IstLagerbestandValue = 0;
             k42IstLagerbestandValue = 0;
             k43IstLagerbestandValue = 0;
             k44IstLagerbestandValue = 0;
             k45IstLagerbestandValue = 0;
             k46IstLagerbestandValue = 0;
             k47IstLagerbestandValue = 0;
             k48IstLagerbestandValue = 0;
             k52IstLagerbestandValue = 0;
             k53IstLagerbestandValue = 0;
             k57IstLagerbestandValue = 0;
             k58IstLagerbestandValue = 0;
             k59IstLagerbestandValue = 0;
             k21PlanLagerbestandValue = 0;
             k21_1PlanLagerbestandValue = 0;
             k22PlanLagerbestandValue = 0;
             k22_1PlanLagerbestandValue = 0;
             k23PlanLagerbestandValue = 0;
             k24PlanLagerbestandValue = 0;
             k24_1PlanLagerbestandValue = 0;
             k24_2PlanLagerbestandValue = 0;
             k25PlanLagerbestandValue = 0;
             k27PlanLagerbestandValue = 0;
             k28PlanLagerbestandValue = 0;
             k28_1PlanLagerbestandValue = 0;
             k32PlanLagerbestandValue = 0;
             k32_1PlanLagerbestandValue = 0;
             k33PlanLagerbestandValue = 0;
             k33_1PlanLagerbestandValue = 0;
             k34PlanLagerbestandValue = 0;
             k35PlanLagerbestandValue = 0;
             k35_1PlanLagerbestandValue = 0;
             k36PlanLagerbestandValue = 0;
             k37PlanLagerbestandValue = 0;
             k38PlanLagerbestandValue = 0;
             k38_1PlanLagerbestandValue = 0;
             k39PlanLagerbestandValue = 0;
             k40PlanLagerbestandValue = 0;
             k40_1PlanLagerbestandValue = 0;
             k41PlanLagerbestandValue = 0;
             k42PlanLagerbestandValue = 0;
             k43PlanLagerbestandValue = 0;
             k43_1PlanLagerbestandValue = 0;
             k44PlanLagerbestandValue = 0;
             k45PlanLagerbestandValue = 0;
             k45_1PlanLagerbestandValue = 0;
             k46PlanLagerbestandValue = 0;
             k47PlanLagerbestandValue = 0;
             k48PlanLagerbestandValue = 0;
             k52PlanLagerbestandValue = 0;
             k52_1PlanLagerbestandValue = 0;
             k53PlanLagerbestandValue = 0;
             k53_1PlanLagerbestandValue = 0;
             k57PlanLagerbestandValue = 0;
             k57_1PlanLagerbestandValue = 0;
             k58PlanLagerbestandValue = 0;
             k58_1PlanLagerbestandValue = 0;
             k59PlanLagerbestandValue = 0;
             e16IstLagerbestandValue = 0;
             e17IstLagerbestandValue = 0;
             e26IstLagerbestandValue = 0;
             e17BearbeitungValue = 0;
             e16BearbeitungValue = 0;
             e26BearbeitungValue = 0;
             e17WarteschlangeValue = 0;
             e16WarteschlangeValue = 0;
             e26WarteschlangeValue = 0;
             p1AbsatzValue = 0;
             p1PlanLagerbestandValue = 0;
             p1IstLagerbestandValue = 0;
             p1WarteschlangeValue = 0;
             p1BearbeitungValue = 0;
             e26_1PlanValue = 0;
             e26_1PlanLagerbestandValue = 0;
             e26_1IstLagerbestandValue = 0;
             e26_1WarteschlangeValue = 0;
             e26_1BearbeitungValue = 0;
             e51PlanValue = 0;
             e51PlanLagerbestandValue = 0;
             e51IstLagerbestandValue = 0;
             e51WarteschlangeValue = 0;
             e51BearbeitungValue = 0;
             e16_1PlanValue = 0;
             e16_1PlanLagerbestandValue = 0;
             e16_1IstLagerbestandValue = 0;
             e16_1WarteschlangeValue = 0;
             e16_1BearbeitungValue = 0;
             e17_1PlanValue = 0;
             e17_1PlanLagerbestandValue = 0;
             e17_1IstLagerbestandValue = 0;
             e17_1WarteschlangeValue = 0;
             e17_1BearbeitungValue = 0;
             e50PlanValue = 0;
             e50PlanLagerbestandValue = 0;
             e50IstLagerbestandValue = 0;
             e50WarteschlangeValue = 0;
             e50BearbeitungValue = 0;
             e4PlanValue = 0;
             e4PlanLagerbestandValue = 0;
             e4IstLagerbestandValue = 0;
             e4WarteschlangeValue = 0;
             e4BearbeitungValue = 0;
             e10PlanValue = 0;
             e10PlanLagerbestandValue = 0;
             e10IstLagerbestandValue = 0;
             e10WarteschlangeValue = 0;
             e10BearbeitungValue = 0;
             e49PlanValue = 0;
             e49PlanLagerbestandValue = 0;
             e49IstLagerbestandValue = 0;
             e49WarteschlangeValue = 0;
             e49BearbeitungValue = 0;
             e7PlanValue = 0;
             e7PlanLagerbestandValue = 0;
             e7IstLagerbestandValue = 0;
             e7WarteschlangeValue = 0;
             e7BearbeitungValue = 0;
             e13PlanValue = 0;
             e13PlanLagerbestandValue = 0;
             e13IstLagerbestandValue = 0;
             e13WarteschlangeValue = 0;
             e13BearbeitungValue = 0;
             e18PlanValue = 0;
             e18PlanLagerbestandValue = 0;
             e18IstLagerbestandValue = 0;
             e18WarteschlangeValue = 0;
             e18BearbeitungValue = 0;
             p2AbsatzValue = 0;
             p2PlanLagerbestandValue = 0;
             p2IstLagerbestandValue = 0;
             p2WarteschlangeValue = 0;
             p2BearbeitungValue = 0;
             e26_2PlanValue = 0;
             e26_2PlanLagerbestandValue = 0;
             e26_2IstLagerbestandValue = 0;
             e26_2WarteschlangeValue = 0;
             e26_2BearbeitungValue = 0;
             e56PlanValue = 0;
             e56PlanLagerbestandValue = 0;
             e56IstLagerbestandValue = 0;
             e56WarteschlangeValue = 0;
             e56BearbeitungValue = 0;
             e16_2PlanValue = 0;
             e16_2PlanLagerbestandValue = 0;
             e16_2IstLagerbestandValue = 0;
             e16_2WarteschlangeValue = 0;
             e16_2BearbeitungValue = 0;
             e17_2PlanValue = 0;
             e17_2PlanLagerbestandValue = 0;
             e17_2IstLagerbestandValue = 0;
             e17_2WarteschlangeValue = 0;
             e17_2BearbeitungValue = 0;
             e55PlanValue = 0;
             e55PlanLagerbestandValue = 0;
             e55IstLagerbestandValue = 0;
             e55WarteschlangeValue = 0;
             e55BearbeitungValue = 0;
             e5PlanValue = 0;
             e5PlanLagerbestandValue = 0;
             e5IstLagerbestandValue = 0;
             e5WarteschlangeValue = 0;
             e5BearbeitungValue = 0;
             e11PlanValue = 0;
             e11PlanLagerbestandValue = 0;
             e11IstLagerbestandValue = 0;
             e11WarteschlangeValue = 0;
             e11BearbeitungValue = 0;
             e54PlanValue = 0;
             e54PlanLagerbestandValue = 0;
             e54IstLagerbestandValue = 0;
             e54WarteschlangeValue = 0;
             e54BearbeitungValue = 0;
             e8PlanValue = 0;
             e8PlanLagerbestandValue = 0;
             e8IstLagerbestandValue = 0;
             e8WarteschlangeValue = 0;
             e8BearbeitungValue = 0;
             e14PlanValue = 0;
             e14PlanLagerbestandValue = 0;
             e14IstLagerbestandValue = 0;
             e14WarteschlangeValue = 0;
             e14BearbeitungValue = 0;
             e19PlanValue = 0;
             e19PlanLagerbestandValue = 0;
             e19IstLagerbestandValue = 0;
             e19WarteschlangeValue = 0;
             e19BearbeitungValue = 0;
             p3AbsatzValue = 0;
             p3PlanLagerbestandValue = 0;
             p3IstLagerbestandValue = 0;
             p3WarteschlangeValue = 0;
             p3BearbeitungValue = 0;
             e26_3PlanValue = 0;
             e26_3PlanLagerbestandValue = 0;
             e26_3IstLagerbestandValue = 0;
             e26_3WarteschlangeValue = 0;
             e26_3BearbeitungValue = 0;
             e31PlanValue = 0;
             e31PlanLagerbestandValue = 0;
             e31IstLagerbestandValue = 0;
             e31WarteschlangeValue = 0;
             e31BearbeitungValue = 0;
             e16_3PlanValue = 0;
             e16_3PlanLagerbestandValue = 0;
             e16_3IstLagerbestandValue = 0;
             e16_3WarteschlangeValue = 0;
             e16_3BearbeitungValue = 0;
             e17_3PlanValue = 0;
             e17_3PlanLagerbestandValue = 0;
             e17_3IstLagerbestandValue = 0;
             e17_3WarteschlangeValue = 0;
             e17_3BearbeitungValue = 0;
             e30PlanValue = 0;
             e30PlanLagerbestandValue = 0;
             e30IstLagerbestandValue = 0;
             e30WarteschlangeValue = 0;
             e30BearbeitungValue = 0;
             e6PlanValue = 0;
             e6PlanLagerbestandValue = 0;
             e6IstLagerbestandValue = 0;
             e6WarteschlangeValue = 0;
             e6BearbeitungValue = 0;
             e12PlanValue = 0;
             e12PlanLagerbestandValue = 0;
             e12IstLagerbestandValue = 0;
             e12WarteschlangeValue = 0;
             e12BearbeitungValue = 0;
             e29PlanValue = 0;
             e29PlanLagerbestandValue = 0;
             e29IstLagerbestandValue = 0;
             e29WarteschlangeValue = 0;
             e29BearbeitungValue = 0;
             e9PlanValue = 0;
             e9PlanLagerbestandValue = 0;
             e9IstLagerbestandValue = 0;
             e9WarteschlangeValue = 0;
             e9BearbeitungValue = 0;
             e15PlanValue = 0;
             e15PlanLagerbestandValue = 0;
             e15IstLagerbestandValue = 0;
             e15WarteschlangeValue = 0;
             e15BearbeitungValue = 0;
             e20PlanValue = 0;
             e20PlanLagerbestandValue = 0;
             e20IstLagerbestandValue = 0;
             e20WarteschlangeValue = 0;
             e20BearbeitungValue = 0;
             k21BestellungMode = 0;
             k21BestellungValue = 0;
             k22BestellungMode = 0;
             k22BestellungValue = 0;
             k23BestellungMode = 0;
             k23BestellungValue = 0;
             k24BestellungMode = 0;
             k24BestellungValue = 0;
             k25BestellungMode = 0;
             k25BestellungValue = 0;
             k27BestellungMode = 0;
             k27BestellungValue = 0;
             k28BestellungMode = 0;
             k28BestellungValue = 0;
             k32BestellungMode = 0;
             k32BestellungValue = 0;
             k33BestellungMode = 0;
             k33BestellungValue = 0;
             k34BestellungMode = 0;
             k34BestellungValue = 0;
             k35BestellungMode = 0;
             k35BestellungValue = 0;
             k36BestellungMode = 0;
             k36BestellungValue = 0;
             k37BestellungMode = 0;
             k37BestellungValue = 0;
             k38BestellungMode = 0;
             k38BestellungValue = 0;
             k39BestellungMode = 0;
             k39BestellungValue = 0;
             k40BestellungMode = 0;
             k40BestellungValue = 0;
             k41BestellungValue = 0;
             k41BestellungMode = 0;
             k42BestellungValue = 0;
             k42BestellungMode = 0;
             k43BestellungValue = 0;
             k43BestellungMode = 0;
             k44BestellungValue = 0;
             k44BestellungMode = 0;
             k45BestellungValue = 0;
             k45BestellungMode = 0;
             k46BestellungValue = 0;
             k46BestellungMode = 0;
             k47BestellungValue = 0;
             k47BestellungMode = 0;
             k48BestellungValue = 0;
             k48BestellungMode = 0;
             k52BestellungValue = 0;
             k52BestellungMode = 0;
             k53BestellungValue = 0;
             k53BestellungMode = 0;
             k57BestellungValue = 0;
             k57BestellungMode = 0;
             k58BestellungValue = 0;
             k58BestellungMode = 0;
             k59BestellungValue = 0;
             k59BestellungMode = 0;
             w1TimeValue = 0;
             w2TimeValue = 0;
             w3TimeValue = 0;
             w4TimeValue = 0;
             w6TimeValue = 0;
             w7TimeValue = 0;
             w8TimeValue = 0;
             w9TimeValue = 0;
             w10TimeValue = 0;
             w11TimeValue = 0;
             w12TimeValue = 0;
             w13TimeValue = 0;
             w14TimeValue = 0;
             w15TimeValue = 0;
             w1OrderTimeValue = 0;
             w2OrderTimeValue = 0;
             w3OrderTimeValue = 0;
             w4OrderTimeValue = 0;
             w6OrderTimeValue = 0;
             w7OrderTimeValue = 0;
             w8OrderTimeValue = 0;
             w9OrderTimeValue = 0;
             w10OrderTimeValue = 0;
             w11OrderTimeValue = 0;
             w12OrderTimeValue = 0;
             w13OrderTimeValue = 0;
             w14OrderTimeValue = 0;
             w15OrderTimeValue = 0;
             schicht1Value = 0;
             schicht2Value = 0;
             schicht3Value = 0;
             schicht4Value = 0;
             schicht6Value = 0;
             schicht7Value = 0;
             schicht8Value = 0;
             schicht9Value = 0;
             schicht10Value = 0;
             schicht11Value = 0;
             schicht12Value = 0;
             schicht13Value = 0;
             schicht14Value = 0;
             schicht15Value = 0;
             ueberstunden1Value = 0;
             ueberstunden2Value = 0;
             ueberstunden3Value = 0;
             ueberstunden4Value = 0;
             ueberstunden6Value = 0;
             ueberstunden7Value = 0;
             ueberstunden8Value = 0;
             ueberstunden9Value = 0;
             ueberstunden10Value = 0;
             ueberstunden11Value = 0;
             ueberstunden12Value = 0;
             ueberstunden13Value = 0;
             ueberstunden14Value = 0;
             ueberstunden15Value = 0;
             schichtZ1Value = 0;
             schichtZ2Value = 0;
             schichtZ3Value = 0;
             schichtZ4Value = 0;
             schichtZ6Value = 0;
             schichtZ7Value = 0;
             schichtZ8Value = 0;
             schichtZ9Value = 0;
             schichtZ10Value = 0;
             schichtZ11Value = 0;
             schichtZ12Value = 0;
             schichtZ13Value = 0;
             schichtZ14Value = 0;
             schichtZ15Value = 0;
             ueberstundenZ1Value = 0;
             ueberstundenZ2Value = 0;
             ueberstundenZ3Value = 0;
             ueberstundenZ4Value = 0;
             ueberstundenZ6Value = 0;
             ueberstundenZ7Value = 0;
             ueberstundenZ8Value = 0;
             ueberstundenZ9Value = 0;
             ueberstundenZ10Value = 0;
             ueberstundenZ11Value = 0;
             ueberstundenZ12Value = 0;
             ueberstundenZ13Value = 0;
             ueberstundenZ14Value = 0;
             ueberstundenZ15Value = 0;
             LanguageValue = "DE";
             FirstUpdateValue = 0;
        },
        setPeriodValue: function(value) {
            periodValue = value;
        },
        getPeriodValue: function() {
            return periodValue;
        },
        setP1_2PlanValue: function(value) {
            p1_2PlanValue = value;
        },
        getP1_2PlanValue: function() {
            return p1_2PlanValue;
        },
        setP2_2PlanValue: function(value) {
            p2_2PlanValue = value;
        },
        getP2_2PlanValue: function() {
            return p2_2PlanValue;
        },
        setP3_2PlanValue: function(value) {
            p3_2PlanValue = value;
        },
        getP3_2PlanValue: function() {
            return p3_2PlanValue;
        },
        setP1_3PlanValue: function(value) {
            p1_3PlanValue = value;
        },
        getP1_3PlanValue: function() {
            return p1_3PlanValue;
        },
        setP2_3PlanValue: function(value) {
            p2_3PlanValue = value;
        },
        getP2_3PlanValue: function() {
            return p2_3PlanValue;
        },
        setP3_3PlanValue: function(value) {
            p3_3PlanValue = value;
        },
        getP3_3PlanValue: function() {
            return p3_3PlanValue;
        },
        setP1_4PlanValue: function(value) {
            p1_4PlanValue = value;
        },
        getP1_4PlanValue: function() {
            return p1_4PlanValue;
        },
        setP2_4PlanValue: function(value) {
            p2_4PlanValue = value;
        },
        getP2_4PlanValue: function() {
            return p2_4PlanValue;
        },
        setP3_4PlanValue: function(value) {
            p3_4PlanValue = value;
        },
        getP3_4PlanValue: function() {
            return p3_4PlanValue;
        },
        setK21IstLagerbestandValue: function(value) {
            k21IstLagerbestandValue = value;
        },
        getK21IstLagerbestandValue: function() {
            return k21IstLagerbestandValue;
        },
        setK22IstLagerbestandValue: function(value) {
            k22IstLagerbestandValue = value;
        },
        getK22IstLagerbestandValue: function() {
            return k22IstLagerbestandValue;
        },
        setK23IstLagerbestandValue: function(value) {
            k23IstLagerbestandValue = value;
        },
        getK23IstLagerbestandValue: function() {
            return k23IstLagerbestandValue;
        },
        setK24IstLagerbestandValue: function(value) {
            k24IstLagerbestandValue = value;
        },
        getK24IstLagerbestandValue: function() {
            return k24IstLagerbestandValue;
        },
        setK25IstLagerbestandValue: function(value) {
            k25IstLagerbestandValue = value;
        },
        getK25IstLagerbestandValue: function() {
            return k25IstLagerbestandValue;
        },
        setK27IstLagerbestandValue: function(value) {
            k27IstLagerbestandValue = value;
        },
        getK27IstLagerbestandValue: function() {
            return k27IstLagerbestandValue;
        },
        setK28IstLagerbestandValue: function(value) {
            k28IstLagerbestandValue = value;
        },
        getK28IstLagerbestandValue: function() {
            return k28IstLagerbestandValue;
        },
        setK32IstLagerbestandValue: function(value) {
            k32IstLagerbestandValue = value;
        },
        getK32IstLagerbestandValue: function() {
            return k32IstLagerbestandValue;
        },
        setK33IstLagerbestandValue: function(value) {
            k33IstLagerbestandValue = value;
        },
        getK33IstLagerbestandValue: function() {
            return k33IstLagerbestandValue;
        },
        setK34IstLagerbestandValue: function(value) {
            k34IstLagerbestandValue = value;
        },
        getK34IstLagerbestandValue: function() {
            return k34IstLagerbestandValue;
        },
        setK35IstLagerbestandValue: function(value) {
            k35IstLagerbestandValue = value;
        },
        getK35IstLagerbestandValue: function() {
            return k35IstLagerbestandValue;
        },
        setK36IstLagerbestandValue: function(value) {
            k36IstLagerbestandValue = value;
        },
        getK36IstLagerbestandValue: function() {
            return k36IstLagerbestandValue;
        },
        setK37IstLagerbestandValue: function(value) {
            k37IstLagerbestandValue = value;
        },
        getK37IstLagerbestandValue: function() {
            return k37IstLagerbestandValue;
        },
        setK38IstLagerbestandValue: function(value) {
            k38IstLagerbestandValue = value;
        },
        getK38IstLagerbestandValue: function() {
            return k38IstLagerbestandValue;
        },
        setK39IstLagerbestandValue: function(value) {
            k39IstLagerbestandValue = value;
        },
        getK39IstLagerbestandValue: function() {
            return k39IstLagerbestandValue;
        },
        setK40IstLagerbestandValue: function(value) {
            k40IstLagerbestandValue = value;
        },
        getK40IstLagerbestandValue: function() {
            return k40IstLagerbestandValue;
        },
        setK41IstLagerbestandValue: function(value) {
            k41IstLagerbestandValue = value;
        },
        getK41IstLagerbestandValue: function() {
            return k41IstLagerbestandValue;
        },
        setK42IstLagerbestandValue: function(value) {
            k42IstLagerbestandValue = value;
        },
        getK42IstLagerbestandValue: function() {
            return k42IstLagerbestandValue;
        },
        setK43IstLagerbestandValue: function(value) {
            k43IstLagerbestandValue = value;
        },
        getK43IstLagerbestandValue: function() {
            return k43IstLagerbestandValue;
        },
        setK44IstLagerbestandValue: function(value) {
            k44IstLagerbestandValue = value;
        },
        getK44IstLagerbestandValue: function() {
            return k44IstLagerbestandValue;
        },
        setK45IstLagerbestandValue: function(value) {
            k45IstLagerbestandValue = value;
        },
        getK45IstLagerbestandValue: function() {
            return k45IstLagerbestandValue;
        },
        setK46IstLagerbestandValue: function(value) {
            k46IstLagerbestandValue = value;
        },
        getK46IstLagerbestandValue: function() {
            return k46IstLagerbestandValue;
        },
        setK47IstLagerbestandValue: function(value) {
            k47IstLagerbestandValue = value;
        },
        getK47IstLagerbestandValue: function() {
            return k47IstLagerbestandValue;
        },
        setK48IstLagerbestandValue: function(value) {
            k48IstLagerbestandValue = value;
        },
        getK48IstLagerbestandValue: function() {
            return k48IstLagerbestandValue;
        },
        setK52IstLagerbestandValue: function(value) {
            k52IstLagerbestandValue = value;
        },
        getK52IstLagerbestandValue: function() {
            return k52IstLagerbestandValue;
        },
        setK53IstLagerbestandValue: function(value) {
            k53IstLagerbestandValue = value;
        },
        getK53IstLagerbestandValue: function() {
            return k53IstLagerbestandValue;
        },
        setK57IstLagerbestandValue: function(value) {
            k57IstLagerbestandValue = value;
        },
        getK57IstLagerbestandValue: function() {
            return k57IstLagerbestandValue;
        },
        setK58IstLagerbestandValue: function(value) {
            k58IstLagerbestandValue = value;
        },
        getK58IstLagerbestandValue: function() {
            return k58IstLagerbestandValue;
        },
        setK59IstLagerbestandValue: function(value) {
            k59IstLagerbestandValue = value;
        },
        getK59IstLagerbestandValue: function() {
            return k59IstLagerbestandValue;
        },
        setK21PlanLagerbestandValue: function(value) {
            k21PlanLagerbestandValue = value;
        },
        getK21PlanLagerbestandValue: function() {
            return k21PlanLagerbestandValue;
        },
        setK21_1PlanLagerbestandValue: function(value) {
            k21_1PlanLagerbestandValue = value;
        },
        getK21_1PlanLagerbestandValue: function() {
            return k21_1PlanLagerbestandValue;
        },
        setK22PlanLagerbestandValue: function(value) {
            k22PlanLagerbestandValue = value;
        },
        getK22PlanLagerbestandValue: function() {
            return k22PlanLagerbestandValue;
        },
        setK22_1PlanLagerbestandValue: function(value) {
            k22_1PlanLagerbestandValue = value;
        },
        getK22_1PlanLagerbestandValue: function() {
            return k22_1PlanLagerbestandValue;
        },
        setK23PlanLagerbestandValue: function(value) {
            k23PlanLagerbestandValue = value;
        },
        getK23PlanLagerbestandValue: function() {
            return k23PlanLagerbestandValue;
        },
        setK24PlanLagerbestandValue: function(value) {
            k24PlanLagerbestandValue = value;
        },
        getK24PlanLagerbestandValue: function() {
            return k24PlanLagerbestandValue;
        },
        setK24_1PlanLagerbestandValue: function(value) {
            k24_1PlanLagerbestandValue = value;
        },
        getK24_1PlanLagerbestandValue: function() {
            return k24_1PlanLagerbestandValue;
        },
        setK24_2PlanLagerbestandValue: function(value) {
            k24_2PlanLagerbestandValue = value;
        },
        getK24_2PlanLagerbestandValue: function() {
            return k24_2PlanLagerbestandValue;
        },
        setK25PlanLagerbestandValue: function(value) {
            k25PlanLagerbestandValue = value;
        },
        getK25PlanLagerbestandValue: function() {
            return k25PlanLagerbestandValue;
        },
        setK27PlanLagerbestandValue: function(value) {
            k27PlanLagerbestandValue = value;
        },
        getK27PlanLagerbestandValue: function() {
            return k27PlanLagerbestandValue;
        },
        setK28PlanLagerbestandValue: function(value) {
            k28PlanLagerbestandValue = value;
        },
        getK28PlanLagerbestandValue: function() {
            return k28PlanLagerbestandValue;
        },
        setK28_1PlanLagerbestandValue: function(value) {
            k28_1PlanLagerbestandValue = value;
        },
        getK28_1PlanLagerbestandValue: function() {
            return k28_1PlanLagerbestandValue;
        },
        setK32PlanLagerbestandValue: function(value) {
            k32PlanLagerbestandValue = value;
        },
        getK32PlanLagerbestandValue: function() {
            return k32PlanLagerbestandValue;
        },
        setK32_1PlanLagerbestandValue: function(value) {
            k32_1PlanLagerbestandValue = value;
        },
        getK32_1PlanLagerbestandValue: function() {
            return k32_1PlanLagerbestandValue;
        },
        setK33PlanLagerbestandValue: function(value) {
            k33PlanLagerbestandValue = value;
        },
        getK33PlanLagerbestandValue: function() {
            return k33PlanLagerbestandValue;
        },
        setK33_1PlanLagerbestandValue: function(value) {
            k33_1PlanLagerbestandValue = value;
        },
        getK33_1PlanLagerbestandValue: function() {
            return k33_1PlanLagerbestandValue;
        },
        setK34PlanLagerbestandValue: function(value) {
            k34PlanLagerbestandValue = value;
        },
        getK34PlanLagerbestandValue: function() {
            return k34PlanLagerbestandValue;
        },
        setK35PlanLagerbestandValue: function(value) {
            k35PlanLagerbestandValue = value;
        },
        getK35PlanLagerbestandValue: function() {
            return k35PlanLagerbestandValue;
        },
        setK35_1PlanLagerbestandValue: function(value) {
            k35_1PlanLagerbestandValue = value;
        },
        getK35_1PlanLagerbestandValue: function() {
            return k35_1PlanLagerbestandValue;
        },
        setK36PlanLagerbestandValue: function(value) {
            k36PlanLagerbestandValue = value;
        },
        getK36PlanLagerbestandValue: function() {
            return k36PlanLagerbestandValue;
        },
        setK37PlanLagerbestandValue: function(value) {
            k37PlanLagerbestandValue = value;
        },
        getK37PlanLagerbestandValue: function() {
            return k37PlanLagerbestandValue;
        },
        setK38PlanLagerbestandValue: function(value) {
            k38PlanLagerbestandValue = value;
        },
        getK38PlanLagerbestandValue: function() {
            return k38PlanLagerbestandValue;
        },
        setK38_1PlanLagerbestandValue: function(value) {
            k38_1PlanLagerbestandValue = value;
        },
        getK38_1PlanLagerbestandValue: function() {
            return k38_1PlanLagerbestandValue;
        },
        setK39PlanLagerbestandValue: function(value) {
            k39PlanLagerbestandValue = value;
        },
        getK39PlanLagerbestandValue: function() {
            return k39PlanLagerbestandValue;
        },
        setK40PlanLagerbestandValue: function(value) {
            k40PlanLagerbestandValue = value;
        },
        getK40PlanLagerbestandValue: function() {
            return k40PlanLagerbestandValue;
        },
        setK40_1PlanLagerbestandValue: function(value) {
            k40_1PlanLagerbestandValue = value;
        },
        getK40_1PlanLagerbestandValue: function() {
            return k40_1PlanLagerbestandValue;
        },
        setK41PlanLagerbestandValue: function(value) {
            k41PlanLagerbestandValue = value;
        },
        getK41PlanLagerbestandValue: function() {
            return k41PlanLagerbestandValue;
        },
        setK42PlanLagerbestandValue: function(value) {
            k42PlanLagerbestandValue = value;
        },
        getK42PlanLagerbestandValue: function() {
            return k42PlanLagerbestandValue;
        },
        setK43PlanLagerbestandValue: function(value) {
            k43PlanLagerbestandValue = value;
        },
        getK43PlanLagerbestandValue: function() {
            return k43PlanLagerbestandValue;
        },
        setK43_1PlanLagerbestandValue: function(value) {
            k43_1PlanLagerbestandValue = value;
        },
        getK43_1PlanLagerbestandValue: function() {
            return k43_1PlanLagerbestandValue;
        },
        setK44PlanLagerbestandValue: function(value) {
            k44PlanLagerbestandValue = value;
        },
        getK44PlanLagerbestandValue: function() {
            return k44PlanLagerbestandValue;
        },
        setK45PlanLagerbestandValue: function(value) {
            k45PlanLagerbestandValue = value;
        },
        getK45PlanLagerbestandValue: function() {
            return k45PlanLagerbestandValue;
        },
        setK45_1PlanLagerbestandValue: function(value) {
            k45_1PlanLagerbestandValue = value;
        },
        getK45_1PlanLagerbestandValue: function() {
            return k45_1PlanLagerbestandValue;
        },
        setK46PlanLagerbestandValue: function(value) {
            k46PlanLagerbestandValue = value;
        },
        getK46PlanLagerbestandValue: function() {
            return k46PlanLagerbestandValue;
        },
        setK47PlanLagerbestandValue: function(value) {
            k47PlanLagerbestandValue = value;
        },
        getK47PlanLagerbestandValue: function() {
            return k47PlanLagerbestandValue;
        },
        setK48PlanLagerbestandValue: function(value) {
            k48PlanLagerbestandValue = value;
        },
        getK48PlanLagerbestandValue: function() {
            return k48PlanLagerbestandValue;
        },
        setK52PlanLagerbestandValue: function(value) {
            k52PlanLagerbestandValue = value;
        },
        getK52PlanLagerbestandValue: function() {
            return k52PlanLagerbestandValue;
        },
        setK52_1PlanLagerbestandValue: function(value) {
            k52_1PlanLagerbestandValue = value;
        },
        getK52_1PlanLagerbestandValue: function() {
            return k52_1PlanLagerbestandValue;
        },
        setK53PlanLagerbestandValue: function(value) {
            k53PlanLagerbestandValue = value;
        },
        getK53PlanLagerbestandValue: function() {
            return k53PlanLagerbestandValue;
        },
        setK53_1PlanLagerbestandValue: function(value) {
            k53_1PlanLagerbestandValue = value;
        },
        getK53_1PlanLagerbestandValue: function() {
            return k53_1PlanLagerbestandValue;
        },
        setK57PlanLagerbestandValue: function(value) {
            k57PlanLagerbestandValue = value;
        },
        getK57PlanLagerbestandValue: function() {
            return k57PlanLagerbestandValue;
        },
        setK57_1PlanLagerbestandValue: function(value) {
            k57_1PlanLagerbestandValue = value;
        },
        getK57_1PlanLagerbestandValue: function() {
            return k57_1PlanLagerbestandValue;
        },
        setK58PlanLagerbestandValue: function(value) {
            k58PlanLagerbestandValue = value;
        },
        getK58PlanLagerbestandValue: function() {
            return k58PlanLagerbestandValue;
        },
        setK58_1PlanLagerbestandValue: function(value) {
            k58_1PlanLagerbestandValue = value;
        },
        getK58_1PlanLagerbestandValue: function() {
            return k58_1PlanLagerbestandValue;
        },
        setK59PlanLagerbestandValue: function(value) {
            k59PlanLagerbestandValue = value;
        },
        getK59PlanLagerbestandValue: function() {
            return k59PlanLagerbestandValue;
        },
        getE18Value: function() {
            return e18PlanValue;
        },
        setE18Value: function(value) {
            k18Value = value;
            e18PlanValue = value;
        },
        getE18BearbeitungValue: function() {
            return e18BearbeitungValue;
        },
        setE18BearbeitungValue: function(value) {
            e18BearbeitungValue = value;
        },
        getE18WarteschlangeValue: function() {
            return e18WarteschlangeValue;
        },
        setE18WarteschlangeValue: function(value) {
            e18WarteschlangeValue = value;
        },
        getE18IstLagerbestandValue: function() {
            return e18IstLagerbestandValue;
        },
        setE18IstLagerbestandValue: function(value) {
            e18IstLagerbestandValue = value;
        },
        getE18PlanLagerbestandValue: function() {
            return e18PlanLagerbestandValue;
        },
        setE18PlanLagerbestandValue: function(value) {
            e18PlanLagerbestandValue = value;
        },
        getE13Value: function() {
            return e13PlanValue;
        },
        setE13Value: function(value) {
            k13Value = value;
            e13PlanValue = value;
        },
        getE13BearbeitungValue: function() {
            return e13BearbeitungValue;
        },
        setE13BearbeitungValue: function(value) {
            e13BearbeitungValue = value;
        },
        getE13WarteschlangeValue: function() {
            return e13WarteschlangeValue;
        },
        setE13WarteschlangeValue: function(value) {
            e13WarteschlangeValue = value;
        },
        getE13IstLagerbestandValue: function() {
            return e13IstLagerbestandValue;
        },
        setE13IstLagerbestandValue: function(value) {
            e13IstLagerbestandValue = value;
        },
        getE13PlanLagerbestandValue: function() {
            return e13PlanLagerbestandValue;
        },
        setE13PlanLagerbestandValue: function(value) {
            e13PlanLagerbestandValue = value;
        },
        getE7Value: function() {
            return e7PlanValue;
        },
        setE7Value: function(value) {
            k7Value = value;
            e7PlanValue = value;
        },
        getE7BearbeitungValue: function() {
            return e7BearbeitungValue;
        },
        setE7BearbeitungValue: function(value) {
            e7BearbeitungValue = value;
        },
        getE7WarteschlangeValue: function() {
            return e7WarteschlangeValue;
        },
        setE7WarteschlangeValue: function(value) {
            e7WarteschlangeValue = value;
        },
        getE7IstLagerbestandValue: function() {
            return e7IstLagerbestandValue;
        },
        setE7IstLagerbestandValue: function(value) {
            e7IstLagerbestandValue = value;
        },
        getE7PlanLagerbestandValue: function() {
            return e7PlanLagerbestandValue;
        },
        setE7PlanLagerbestandValue: function(value) {
            e7PlanLagerbestandValue = value;
        },
        getE49Value: function() {
            return e49PlanValue;
        },
        setE49Value: function(value) {
            k49Value = value;
            e49PlanValue = value;
        },
        getE49BearbeitungValue: function() {
            return e49BearbeitungValue;
        },
        setE49BearbeitungValue: function(value) {
            e49BearbeitungValue = value;
        },
        getE49WarteschlangeValue: function() {
            return e49WarteschlangeValue;
        },
        setE49WarteschlangeValue: function(value) {
            e49WarteschlangeValue = value;
        },
        getE49IstLagerbestandValue: function() {
            return e49IstLagerbestandValue;
        },
        setE49IstLagerbestandValue: function(value) {
            e49IstLagerbestandValue = value;
        },
        getE49PlanLagerbestandValue: function() {
            return e49PlanLagerbestandValue;
        },
        setE49PlanLagerbestandValue: function(value) {
            e49PlanLagerbestandValue = value;
        },
        getE10Value: function() {
            return e10PlanValue;
        },
        setE10Value: function(value) {
            k10Value = value;
            e10PlanValue = value;
        },
        getE10BearbeitungValue: function() {
            return e10BearbeitungValue;
        },
        setE10BearbeitungValue: function(value) {
            e10BearbeitungValue = value;
        },
        getE10WarteschlangeValue: function() {
            return e10WarteschlangeValue;
        },
        setE10WarteschlangeValue: function(value) {
            e10WarteschlangeValue = value;
        },
        getE10IstLagerbestandValue: function() {
            return e10IstLagerbestandValue;
        },
        setE10IstLagerbestandValue: function(value) {
            e10IstLagerbestandValue = value;
        },
        getE10PlanLagerbestandValue: function() {
            return e10PlanLagerbestandValue;
        },
        setE10PlanLagerbestandValue: function(value) {
            e10PlanLagerbestandValue = value;
        },
        getE4Value: function() {
            return e4PlanValue;
        },
        setE4Value: function(value) {
            k4Value = value;
            e4PlanValue = value;
        },
        getE4BearbeitungValue: function() {
            return e4BearbeitungValue;
        },
        setE4BearbeitungValue: function(value) {
            e4BearbeitungValue = value;
        },
        getE4WarteschlangeValue: function() {
            return e4WarteschlangeValue;
        },
        setE4WarteschlangeValue: function(value) {
            e4WarteschlangeValue = value;
        },
        getE4IstLagerbestandValue: function() {
            return e4IstLagerbestandValue;
        },
        setE4IstLagerbestandValue: function(value) {
            e4IstLagerbestandValue = value;
        },
        getE4PlanLagerbestandValue: function() {
            return e4PlanLagerbestandValue;
        },
        setE4PlanLagerbestandValue: function(value) {
            e4PlanLagerbestandValue = value;
        },
        getE50Value: function() {
            return e50PlanValue;
        },
        setE50Value: function(value) {
            k50Value = value;
            e50PlanValue = value;
        },
        getE50BearbeitungValue: function() {
            return e50BearbeitungValue;
        },
        setE50BearbeitungValue: function(value) {
            e50BearbeitungValue = value;
        },
        getE50WarteschlangeValue: function() {
            return e50WarteschlangeValue;
        },
        setE50WarteschlangeValue: function(value) {
            e50WarteschlangeValue = value;
        },
        getE50IstLagerbestandValue: function() {
            return e50IstLagerbestandValue;
        },
        setE50IstLagerbestandValue: function(value) {
            e50IstLagerbestandValue = value;
        },
        getE50PlanLagerbestandValue: function() {
            return e50PlanLagerbestandValue;
        },
        setE50PlanLagerbestandValue: function(value) {
            e50PlanLagerbestandValue = value;
        },
        getE17_1Value: function() {
            return e17_1PlanValue;
        },
        setE17_1Value: function(value) {
            e17_1PlanValue = value;
        },
        getE17_1BearbeitungValue: function() {
            return e17BearbeitungValue/3;
        },
        setE17_1BearbeitungValue: function(value) {
            e17_1BearbeitungValue = value;
        },
        getE17_1WarteschlangeValue: function() {
            return e17WarteschlangeValue/3;
        },
        setE17_1WarteschlangeValue: function(value) {
            e17_1WarteschlangeValue = value;
        },
        getE17_1IstLagerbestandValue: function() {
            return e17_1IstLagerbestandValue;
        },
        setE17_1IstLagerbestandValue: function(value) {
            e17_1IstLagerbestandValue = value;
        },
        getE17_1PlanLagerbestandValue: function() {
            return e17_1PlanLagerbestandValue;
        },
        setE17_1PlanLagerbestandValue: function(value) {
            e17_1PlanLagerbestandValue = value;
        },
        getE17IstLagerbestandValue: function() {
            return e17IstLagerbestandValue;
        },
        setE17IstLagerbestandValue: function(value) {
            e17IstLagerbestandValue = value;
        },
        getE16_1Value: function() {
            return e16_1PlanValue;
        },
        setE16_1Value: function(value) {
            e16_1PlanValue = value;
        },
        getE16_1BearbeitungValue: function() {
            return e16BearbeitungValue/3;
        },
        setE16_1BearbeitungValue: function(value) {
            e16_1BearbeitungValue = value;
        },
        getE16_1WarteschlangeValue: function() {
            return e16WarteschlangeValue/3;
        },
        setE16_1WarteschlangeValue: function(value) {
            e16_1WarteschlangeValue = value;
        },
        getE16_1IstLagerbestandValue: function() {
            return e16_1IstLagerbestandValue;
        },
        setE16_1IstLagerbestandValue: function(value) {
            e16_1IstLagerbestandValue = value;
        },
        getE16_1PlanLagerbestandValue: function() {
            return e16_1PlanLagerbestandValue;
        },
        setE16_1PlanLagerbestandValue: function(value) {
            e16_1PlanLagerbestandValue = value;
        },
        getE16IstLagerbestandValue: function() {
            return e16IstLagerbestandValue;
        },
        setE16IstLagerbestandValue: function(value) {
            e16IstLagerbestandValue = value;
        },
        getE51Value: function() {
            return e51PlanValue;
        },
        setE51Value: function(value) {
            k51Value = value;
            e51PlanValue = value;
        },
        getE51BearbeitungValue: function() {
            return e51BearbeitungValue;
        },
        setE51BearbeitungValue: function(value) {
            e51BearbeitungValue = value;
        },
        getE51WarteschlangeValue: function() {
            return e51WarteschlangeValue;
        },
        setE51WarteschlangeValue: function(value) {
            e51WarteschlangeValue = value;
        },
        getE51IstLagerbestandValue: function() {
            return e51IstLagerbestandValue;
        },
        setE51IstLagerbestandValue: function(value) {
            e51IstLagerbestandValue = value;
        },
        getE51PlanLagerbestandValue: function() {
            return e51PlanLagerbestandValue;
        },
        setE51PlanLagerbestandValue: function(value) {
            e51PlanLagerbestandValue = value;
        },
        getE26_1Value: function() {
            return e26_1PlanValue;
        },
        setE26_1Value: function(value) {
            e26_1PlanValue = value;
        },
        getE26_1BearbeitungValue: function() {
            return e26BearbeitungValue/3;
        },
        setE26_1BearbeitungValue: function(value) {
            e26_1BearbeitungValue = value;
        },
        getE26_1WarteschlangeValue: function() {
            return e26WarteschlangeValue/3;
        },
        setE26_1WarteschlangeValue: function(value) {
            e26_1WarteschlangeValue = value;
        },
        getE26_1IstLagerbestandValue: function() {
            return e26_1IstLagerbestandValue;
        },
        setE26_1IstLagerbestandValue: function(value) {
            e26_1IstLagerbestandValue = value;
        },
        getE26_1PlanLagerbestandValue: function() {
            return e26_1PlanLagerbestandValue;
        },
        setE26_1PlanLagerbestandValue: function(value) {
            e26_1PlanLagerbestandValue = value;
        },
        setE26IstLagerbestandValue: function(value) {
            e26IstLagerbestandValue = value;
        },
        getE26IstLagerbestandValue: function() {
            return e26IstLagerbestandValue;
        },
        getP1BearbeitungValue: function() {
            return p1WarteschlangeValue;
        },
        setP1BearbeitungValue: function(value) {
            p1WarteschlangeValue = value;
        },
        getP1WarteschlangeValue: function() {
            return p1WarteschlangeValue;
        },
        setP1WarteschlangeValue: function(value) {
            p1WarteschlangeValue = value;
        },
        getP1IstLagerbestandValue: function() {
            return p1IstLagerbestandValue;
        },
        setP1IstLagerbestandValue: function(value) {
            p1IstLagerbestandValue = value;
        },
        getP1PlanLagerbestandValue: function() {
            return p1PlanLagerbestandValue;
        },
        setP1PlanLagerbestandValue: function(value) {
            p1PlanLagerbestandValue = value;
        },
        getP1AbsatzValue: function() {
            return p1AbsatzValue;
        },
        setP1AbsatzValue: function(value) {
            p1AbsatzValue = value;
        },
        getP1Value: function() {
            return p1Value;
        },
        setP1Value: function(value) {
            p1Value = value;
        },
        getP2Value: function() {
            return p2Value;
        },
        setP2Value: function(value) {
            p2Value = value;
        },
        getP3Value: function() {
            return p3Value;
        },
        setP3Value: function(value) {
            p3Value = value;
        },
        getK4Value: function() {
            return k4Value;
        },
        setK4Value: function(value) {
            k4Value = value;
        },
        getD5Value: function() {
            return d5Value;
        },
        setD5Value: function(value) {
            d5Value = value;
        },
        getH6Value: function() {
            return h6Value;
        },
        setH6Value: function(value) {
            h6Value = value;
        },
        getK7Value: function() {
            return k7Value;
        },
        setK7Value: function(value) {
            k7Value = value;
        },
        getD8Value: function() {
            return d8Value;
        },
        setD8Value: function(value) {
            d8Value = value;
        },
        getH9Value: function() {
            return h9Value;
        },
        setH9Value: function(value) {
            h9Value = value;
        },
        getK10Value: function() {
            return k10Value;
        },
        setK10Value: function(value) {
            k10Value = value;
        },
        getD11Value: function() {
            return d11Value;
        },
        setD11Value: function(value) {
            d11Value = value;
        },
        getH12Value: function() {
            return h12Value;
        },
        setH12Value: function(value) {
            h12Value = value;
        },
        getK13Value: function() {
            return k13Value;
        },
        setK13Value: function(value) {
            k13Value = value;
        },
        getD14Value: function() {
            return d14Value;
        },
        setD14Value: function(value) {
            d14Value = value;
        },
        getH15Value: function() {
            return h15Value;
        },
        setH15Value: function(value) {
            h15Value = value;
        },
        getKDH16Value: function() {
            kdh16Value = e16_1PlanValue + e16_2PlanValue + e16_3PlanValue;
            return kdh16Value;
        },
        setKDH16Value: function(value) {
            kdh16Value = value;
        },
        getKDH17Value: function() {
            kdh17Value = e17_1PlanValue + e17_2PlanValue + e17_3PlanValue;
            return kdh17Value;
        },
        setKDH17Value: function(value) {
            kdh17Value = value;
        },
        getK18Value: function() {
            return k18Value;
        },
        setK18Value: function(value) {
            k18Value = value;
        },
        getD19Value: function() {
            return d19Value;
        },
        setD19Value: function(value) {
            d19Value = value;
        },
        getH20Value: function() {
            return h20Value;
        },
        setH20Value: function(value) {
            h20Value = value;
        },
        getKDH26Value: function() {
            kdh26Value = e26_1PlanValue + e26_2PlanValue + e26_3PlanValue;
            return kdh26Value;
        },
        setKDH26Value: function(value) {
            kdh26Value = value;
        },
        getK49Value: function() {
            return k49Value;
        },
        setK49Value: function(value) {
            k49Value = value;
        },
        getD54Value: function() {
            return d54Value;
        },
        setD54Value: function(value) {
            d54Value = value;
        },
        getH29Value: function() {
            return h29Value;
        },
        setH29Value: function(value) {
            h29Value = value;
        },
        getK50Value: function() {
            return k50Value;
        },
        setK50Value: function(value) {
            k50Value = value;
        },
        getD55Value: function() {
            return d55Value;
        },
        setD55Value: function(value) {
            d55Value = value;
        },
        getH30Value: function() {
            return h30Value;
        },
        setH30Value: function(value) {
            h30Value = value;
        },
        getK51Value: function() {
            return k51Value;
        },
        setK51Value: function(value) {
            k51Value = value;
        },
        getD56Value: function() {
            return d56Value;
        },
        setD56Value: function(value) {
            d56Value = value;
        },
        getH31Value: function() {
            return h31Value;
        },
        setH31Value: function(value) {
            h31Value = value;
        },
        getE19Value: function() {
            return e19PlanValue;
        },
        setE19Value: function(value) {
            d19Value = value;
            e19PlanValue = value;
        },
        getE19BearbeitungValue: function() {
            return e19BearbeitungValue;
        },
        setE19BearbeitungValue: function(value) {
            e19BearbeitungValue = value;
        },
        getE19WarteschlangeValue: function() {
            return e19WarteschlangeValue;
        },
        setE19WarteschlangeValue: function(value) {
            e19WarteschlangeValue = value;
        },
        getE19IstLagerbestandValue: function() {
            return e19IstLagerbestandValue;
        },
        setE19IstLagerbestandValue: function(value) {
            e19IstLagerbestandValue = value;
        },
        getE19PlanLagerbestandValue: function() {
            return e19PlanLagerbestandValue;
        },
        setE19PlanLagerbestandValue: function(value) {
            e19PlanLagerbestandValue = value;
        },
        getE14Value: function() {
            return e14PlanValue;
        },
        setE14Value: function(value) {
            d14Value = value;
            e14PlanValue = value;
        },
        getE14BearbeitungValue: function() {
            return e14BearbeitungValue;
        },
        setE14BearbeitungValue: function(value) {
            e14BearbeitungValue = value;
        },
        getE14WarteschlangeValue: function() {
            return e14WarteschlangeValue;
        },
        setE14WarteschlangeValue: function(value) {
            e14WarteschlangeValue = value;
        },
        getE14IstLagerbestandValue: function() {
            return e14IstLagerbestandValue;
        },
        setE14IstLagerbestandValue: function(value) {
            e14IstLagerbestandValue = value;
        },
        getE14PlanLagerbestandValue: function() {
            return e14PlanLagerbestandValue;
        },
        setE14PlanLagerbestandValue: function(value) {
            e14PlanLagerbestandValue = value;
        },
        getE8Value: function() {
            return e8PlanValue;
        },
        setE8Value: function(value) {
            d8Value = value;
            e8PlanValue = value;
        },
        getE8BearbeitungValue: function() {
            return e8BearbeitungValue;
        },
        setE8BearbeitungValue: function(value) {
            e8BearbeitungValue = value;
        },
        getE8WarteschlangeValue: function() {
            return e8WarteschlangeValue;
        },
        setE8WarteschlangeValue: function(value) {
            e8WarteschlangeValue = value;
        },
        getE8IstLagerbestandValue: function() {
            return e8IstLagerbestandValue;
        },
        setE8IstLagerbestandValue: function(value) {
            e8IstLagerbestandValue = value;
        },
        getE8PlanLagerbestandValue: function() {
            return e8PlanLagerbestandValue;
        },
        setE8PlanLagerbestandValue: function(value) {
            e8PlanLagerbestandValue = value;
        },
        getE54Value: function() {
            return e54PlanValue;
        },
        setE54Value: function(value) {
            d54Value = value;
            e54PlanValue = value;
        },
        getE54BearbeitungValue: function() {
            return e54BearbeitungValue;
        },
        setE54BearbeitungValue: function(value) {
            e54BearbeitungValue = value;
        },
        getE54WarteschlangeValue: function() {
            return e54WarteschlangeValue;
        },
        setE54WarteschlangeValue: function(value) {
            e54WarteschlangeValue = value;
        },
        getE54IstLagerbestandValue: function() {
            return e54IstLagerbestandValue;
        },
        setE54IstLagerbestandValue: function(value) {
            e54IstLagerbestandValue = value;
        },
        getE54PlanLagerbestandValue: function() {
            return e54PlanLagerbestandValue;
        },
        setE54PlanLagerbestandValue: function(value) {
            e54PlanLagerbestandValue = value;
        },
        getE11Value: function() {
            return e11PlanValue;
        },
        setE11Value: function(value) {
            d11Value = value;
            e11PlanValue = value;
        },
        getE11BearbeitungValue: function() {
            return e11BearbeitungValue;
        },
        setE11BearbeitungValue: function(value) {
            e11BearbeitungValue = value;
        },
        getE11WarteschlangeValue: function() {
            return e11WarteschlangeValue;
        },
        setE11WarteschlangeValue: function(value) {
            e11WarteschlangeValue = value;
        },
        getE11IstLagerbestandValue: function() {
            return e11IstLagerbestandValue;
        },
        setE11IstLagerbestandValue: function(value) {
            e11IstLagerbestandValue = value;
        },
        getE11PlanLagerbestandValue: function() {
            return e11PlanLagerbestandValue;
        },
        setE11PlanLagerbestandValue: function(value) {
            e11PlanLagerbestandValue = value;
        },
        getE5Value: function() {
            return e5PlanValue;
        },
        setE5Value: function(value) {
            d5Value = value;
            e5PlanValue = value;
        },
        getE5BearbeitungValue: function() {
            return e5BearbeitungValue;
        },
        setE5BearbeitungValue: function(value) {
            e5BearbeitungValue = value;
        },
        getE5WarteschlangeValue: function() {
            return e5WarteschlangeValue;
        },
        setE5WarteschlangeValue: function(value) {
            e5WarteschlangeValue = value;
        },
        getE5IstLagerbestandValue: function() {
            return e5IstLagerbestandValue;
        },
        setE5IstLagerbestandValue: function(value) {
            e5IstLagerbestandValue = value;
        },
        getE5PlanLagerbestandValue: function() {
            return e5PlanLagerbestandValue;
        },
        setE5PlanLagerbestandValue: function(value) {
            e5PlanLagerbestandValue = value;
        },
        getE55Value: function() {
            return e55PlanValue;
        },
        setE55Value: function(value) {
            d55Value = value;
            e55PlanValue = value;
        },
        getE55BearbeitungValue: function() {
            return e55BearbeitungValue;
        },
        setE55BearbeitungValue: function(value) {
            e55BearbeitungValue = value;
        },
        getE55WarteschlangeValue: function() {
            return e55WarteschlangeValue;
        },
        setE55WarteschlangeValue: function(value) {
            e55WarteschlangeValue = value;
        },
        getE55IstLagerbestandValue: function() {
            return e55IstLagerbestandValue;
        },
        setE55IstLagerbestandValue: function(value) {
            e55IstLagerbestandValue = value;
        },
        getE55PlanLagerbestandValue: function() {
            return e55PlanLagerbestandValue;
        },
        setE55PlanLagerbestandValue: function(value) {
            e55PlanLagerbestandValue = value;
        },
        getE17_2Value: function() {
            return e17_2PlanValue;
        },
        setE17_2Value: function(value) {
            e17_2PlanValue = value;
        },
        getE17_2BearbeitungValue: function() {
            return e17BearbeitungValue/3;
        },
        setE17_2BearbeitungValue: function(value) {
            e17_2BearbeitungValue = value;
        },
        getE17_2WarteschlangeValue: function() {
            return e17WarteschlangeValue/3;
        },
        setE17_2WarteschlangeValue: function(value) {
            e17_2WarteschlangeValue = value;
        },
        getE17_2IstLagerbestandValue: function() {
            return e17_2IstLagerbestandValue;
        },
        setE17_2IstLagerbestandValue: function(value) {
            e17_2IstLagerbestandValue = value;
        },
        getE17_2PlanLagerbestandValue: function() {
            return e17_2PlanLagerbestandValue;
        },
        setE17_2PlanLagerbestandValue: function(value) {
            e17_2PlanLagerbestandValue = value;
        },
        getE16_2Value: function() {
            return e16_2PlanValue;
        },
        setE16_2Value: function(value) {
            e16_2PlanValue = value;
        },
        getE16_2BearbeitungValue: function() {
            return e16BearbeitungValue/3;
        },
        setE16_2BearbeitungValue: function(value) {
            e16_2BearbeitungValue = value;
        },
        getE16_2WarteschlangeValue: function() {
            return e16WarteschlangeValue/3;
        },
        setE16_2WarteschlangeValue: function(value) {
            e16_2WarteschlangeValue = value;
        },
        getE16_2IstLagerbestandValue: function() {
            return e16_2IstLagerbestandValue;
        },
        setE16_2IstLagerbestandValue: function(value) {
            e16_2IstLagerbestandValue = value;
        },
        getE16_2PlanLagerbestandValue: function() {
            return e16_2PlanLagerbestandValue;
        },
        setE16_2PlanLagerbestandValue: function(value) {
            e16_2PlanLagerbestandValue = value;
        },
        getE56Value: function() {
            return e56PlanValue;
        },
        setE56Value: function(value) {
            d56Value = value;
            e56PlanValue = value;
        },
        getE56BearbeitungValue: function() {
            return e56BearbeitungValue;
        },
        setE56BearbeitungValue: function(value) {
            e56BearbeitungValue = value;
        },
        getE56WarteschlangeValue: function() {
            return e56WarteschlangeValue;
        },
        setE56WarteschlangeValue: function(value) {
            e56WarteschlangeValue = value;
        },
        getE56IstLagerbestandValue: function() {
            return e56IstLagerbestandValue;
        },
        setE56IstLagerbestandValue: function(value) {
            e56IstLagerbestandValue = value;
        },
        getE56PlanLagerbestandValue: function() {
            return e56PlanLagerbestandValue;
        },
        setE56PlanLagerbestandValue: function(value) {
            e56PlanLagerbestandValue = value;
        },
        getE26_2Value: function() {
            return e26_2PlanValue;
        },
        setE26_2Value: function(value) {
            e26_2PlanValue = value;
        },
        getE26_2BearbeitungValue: function() {
            return e26BearbeitungValue/3;
        },
        setE26_2BearbeitungValue: function(value) {
            e26_2BearbeitungValue = value;
        },
        getE26_2WarteschlangeValue: function() {
            return e26WarteschlangeValue/3;
        },
        setE26_2WarteschlangeValue: function(value) {
            e26_2WarteschlangeValue = value;
        },
        getE26_2IstLagerbestandValue: function() {
            return e26_2IstLagerbestandValue;
        },
        setE26_2IstLagerbestandValue: function(value) {
            e26_2IstLagerbestandValue = value;
        },
        getE26_2PlanLagerbestandValue: function() {
            return e26_2PlanLagerbestandValue;
        },
        setE26_2PlanLagerbestandValue: function(value) {
            e26_2PlanLagerbestandValue = value;
        },
        getP2BearbeitungValue: function() {
            return p2WarteschlangeValue;
        },
        setP2BearbeitungValue: function(value) {
            p2WarteschlangeValue = value;
        },
        getP2WarteschlangeValue: function() {
            return p2WarteschlangeValue;
        },
        setP2WarteschlangeValue: function(value) {
            p2WarteschlangeValue = value;
        },
        getP2IstLagerbestandValue: function() {
            return p2IstLagerbestandValue;
        },
        setP2IstLagerbestandValue: function(value) {
            p2IstLagerbestandValue = value;
        },
        getP2PlanLagerbestandValue: function() {
            return p2PlanLagerbestandValue;
        },
        setP2PlanLagerbestandValue: function(value) {
            p2PlanLagerbestandValue = value;
        },
        getP2AbsatzValue: function() {
            return p2AbsatzValue;
        },
        setP2AbsatzValue: function(value) {
            p2AbsatzValue = value;
        },
        getE20Value: function() {
            return e20PlanValue;
        },
        setE20Value: function(value) {
            h20Value = value;
            e20PlanValue = value;
        },
        getE20BearbeitungValue: function() {
            return e20BearbeitungValue;
        },
        setE20BearbeitungValue: function(value) {
            e20BearbeitungValue = value;
        },
        getE20WarteschlangeValue: function() {
            return e20WarteschlangeValue;
        },
        setE20WarteschlangeValue: function(value) {
            e20WarteschlangeValue = value;
        },
        getE20IstLagerbestandValue: function() {
            return e20IstLagerbestandValue;
        },
        setE20IstLagerbestandValue: function(value) {
            e20IstLagerbestandValue = value;
        },
        getE20PlanLagerbestandValue: function() {
            return e20PlanLagerbestandValue;
        },
        setE20PlanLagerbestandValue: function(value) {
            e20PlanLagerbestandValue = value;
        },
        getE15Value: function() {
            return e15PlanValue;
        },
        setE15Value: function(value) {
            h15Value = value;
            e15PlanValue = value;
        },
        getE15BearbeitungValue: function() {
            return e15BearbeitungValue;
        },
        setE15BearbeitungValue: function(value) {
            e15BearbeitungValue = value;
        },
        getE15WarteschlangeValue: function() {
            return e15WarteschlangeValue;
        },
        setE15WarteschlangeValue: function(value) {
            e15WarteschlangeValue = value;
        },
        getE15IstLagerbestandValue: function() {
            return e15IstLagerbestandValue;
        },
        setE15IstLagerbestandValue: function(value) {
            e15IstLagerbestandValue = value;
        },
        getE15PlanLagerbestandValue: function() {
            return e15PlanLagerbestandValue;
        },
        setE15PlanLagerbestandValue: function(value) {
            e15PlanLagerbestandValue = value;
        },
        getE9Value: function() {
            return e9PlanValue;
        },
        setE9Value: function(value) {
            h9Value = value;
            e9PlanValue = value;
        },
        getE9BearbeitungValue: function() {
            return e9BearbeitungValue;
        },
        setE9BearbeitungValue: function(value) {
            e9BearbeitungValue = value;
        },
        getE9WarteschlangeValue: function() {
            return e9WarteschlangeValue;
        },
        setE9WarteschlangeValue: function(value) {
            e9WarteschlangeValue = value;
        },
        getE9IstLagerbestandValue: function() {
            return e9IstLagerbestandValue;
        },
        setE9IstLagerbestandValue: function(value) {
            e9IstLagerbestandValue = value;
        },
        getE9PlanLagerbestandValue: function() {
            return e9PlanLagerbestandValue;
        },
        setE9PlanLagerbestandValue: function(value) {
            e9PlanLagerbestandValue = value;
        },
        getE29Value: function() {
            return e29PlanValue;
        },
        setE29Value: function(value) {
            h29Value = value;
            e29PlanValue = value;
        },
        getE29BearbeitungValue: function() {
            return e29BearbeitungValue;
        },
        setE29BearbeitungValue: function(value) {
            e29BearbeitungValue = value;
        },
        getE29WarteschlangeValue: function() {
            return e29WarteschlangeValue;
        },
        setE29WarteschlangeValue: function(value) {
            e29WarteschlangeValue = value;
        },
        getE29IstLagerbestandValue: function() {
            return e29IstLagerbestandValue;
        },
        setE29IstLagerbestandValue: function(value) {
            e29IstLagerbestandValue = value;
        },
        getE29PlanLagerbestandValue: function() {
            return e29PlanLagerbestandValue;
        },
        setE29PlanLagerbestandValue: function(value) {
            e29PlanLagerbestandValue = value;
        },
        getE12Value: function() {
            return e12PlanValue;
        },
        setE12Value: function(value) {
            h12Value = value;
            e12PlanValue = value;
        },
        getE12BearbeitungValue: function() {
            return e12BearbeitungValue;
        },
        setE12BearbeitungValue: function(value) {
            e12BearbeitungValue = value;
        },
        getE12WarteschlangeValue: function() {
            return e12WarteschlangeValue;
        },
        setE12WarteschlangeValue: function(value) {
            e12WarteschlangeValue = value;
        },
        getE12IstLagerbestandValue: function() {
            return e12IstLagerbestandValue;
        },
        setE12IstLagerbestandValue: function(value) {
            e12IstLagerbestandValue = value;
        },
        getE12PlanLagerbestandValue: function() {
            return e12PlanLagerbestandValue;
        },
        setE12PlanLagerbestandValue: function(value) {
            e12PlanLagerbestandValue = value;
        },
        getE6Value: function() {
            return e6PlanValue;
        },
        setE6Value: function(value) {
            h6Value = value;
            e6PlanValue = value;
        },
        getE6BearbeitungValue: function() {
            return e6BearbeitungValue;
        },
        setE6BearbeitungValue: function(value) {
            e6BearbeitungValue = value;
        },
        getE6WarteschlangeValue: function() {
            return e6WarteschlangeValue;
        },
        setE6WarteschlangeValue: function(value) {
            e6WarteschlangeValue = value;
        },
        getE6IstLagerbestandValue: function() {
            return e6IstLagerbestandValue;
        },
        setE6IstLagerbestandValue: function(value) {
            e6IstLagerbestandValue = value;
        },
        getE6PlanLagerbestandValue: function() {
            return e6PlanLagerbestandValue;
        },
        setE6PlanLagerbestandValue: function(value) {
            e6PlanLagerbestandValue = value;
        },
        getE30Value: function() {
            return e30PlanValue;
        },
        setE30Value: function(value) {
            h30Value = value;
            e30PlanValue = value;
        },
        getE30BearbeitungValue: function() {
            return e30BearbeitungValue;
        },
        setE30BearbeitungValue: function(value) {
            e30BearbeitungValue = value;
        },
        getE30WarteschlangeValue: function() {
            return e30WarteschlangeValue;
        },
        setE30WarteschlangeValue: function(value) {
            e30WarteschlangeValue = value;
        },
        getE30IstLagerbestandValue: function() {
            return e30IstLagerbestandValue;
        },
        setE30IstLagerbestandValue: function(value) {
            e30IstLagerbestandValue = value;
        },
        getE30PlanLagerbestandValue: function() {
            return e30PlanLagerbestandValue;
        },
        setE30PlanLagerbestandValue: function(value) {
            e30PlanLagerbestandValue = value;
        },
        getE17_3Value: function() {
            return e17_3PlanValue;
        },
        setE17_3Value: function(value) {
            e17_3PlanValue = value;
        },
        getE17_3BearbeitungValue: function() {
            return e17BearbeitungValue/3;
        },
        setE17_3BearbeitungValue: function(value) {
            e17_3BearbeitungValue = value;
        },
        getE17_3WarteschlangeValue: function() {
            return e17WarteschlangeValue/3;
        },
        setE17_3WarteschlangeValue: function(value) {
            e17_3WarteschlangeValue = value;
        },
        getE17_3IstLagerbestandValue: function() {
            return e17_3IstLagerbestandValue;
        },
        setE17_3IstLagerbestandValue: function(value) {
            e17_3IstLagerbestandValue = value;
        },
        getE17_3PlanLagerbestandValue: function() {
            return e17_3PlanLagerbestandValue;
        },
        setE17_3PlanLagerbestandValue: function(value) {
            e17_3PlanLagerbestandValue = value;
        },
        getE17BearbeitungValue: function() {
            return e17BearbeitungValue;
        },
        setE17BearbeitungValue: function(value) {
            e17BearbeitungValue = value;
        },
        getE16BearbeitungValue: function() {
            return e16BearbeitungValue;
        },
        setE16BearbeitungValue: function(value) {
            e16BearbeitungValue = value;
        },
        getE26BearbeitungValue: function() {
            return e26BearbeitungValue;
        },
        setE26BearbeitungValue: function(value) {
            e26BearbeitungValue = value;
        },
        getE17WarteschlangeValue: function() {
            return e17WarteschlangeValue;
        },
        setE17WarteschlangeValue: function(value) {
            e17WarteschlangeValue = value;
        },
        getE16WarteschlangeValue: function() {
            return e16WarteschlangeValue;
        },
        setE16WarteschlangeValue: function(value) {
            e16WarteschlangeValue = value;
        },
        getE26WarteschlangeValue: function() {
            return e26WarteschlangeValue;
        },
        setE26WarteschlangeValue: function(value) {
            e26WarteschlangeValue = value;
        },
        getE16_3Value: function() {
            return e16_3PlanValue;
        },
        setE16_3Value: function(value) {
            e16_3PlanValue = value;
        },
        getE16_3BearbeitungValue: function() {
            return e16BearbeitungValue/3;
        },
        setE16_3BearbeitungValue: function(value) {
            e16_3BearbeitungValue = value;
        },
        getE16_3WarteschlangeValue: function() {
            return e16WarteschlangeValue/3;
        },
        setE16_3WarteschlangeValue: function(value) {
            e16_3WarteschlangeValue = value;
        },
        getE16_3IstLagerbestandValue: function() {
            return e16_3IstLagerbestandValue;
        },
        setE16_3IstLagerbestandValue: function(value) {
            e16_3IstLagerbestandValue = value;
        },
        getE16_3PlanLagerbestandValue: function() {
            return e16_3PlanLagerbestandValue;
        },
        setE16_3PlanLagerbestandValue: function(value) {
            e16_3PlanLagerbestandValue = value;
        },
        getE31Value: function() {
            return e31PlanValue;
        },
        setE31Value: function(value) {
            h31Value = value;
            e31PlanValue = value;
        },
        getE31BearbeitungValue: function() {
            return e31BearbeitungValue;
        },
        setE31BearbeitungValue: function(value) {
            e31BearbeitungValue = value;
        },
        getE31WarteschlangeValue: function() {
            return e31WarteschlangeValue;
        },
        setE31WarteschlangeValue: function(value) {
            e31WarteschlangeValue = value;
        },
        getE31IstLagerbestandValue: function() {
            return e31IstLagerbestandValue;
        },
        setE31IstLagerbestandValue: function(value) {
            e31IstLagerbestandValue = value;
        },
        getE31PlanLagerbestandValue: function() {
            return e31PlanLagerbestandValue;
        },
        setE31PlanLagerbestandValue: function(value) {
            e31PlanLagerbestandValue = value;
        },
        getE26_3Value: function() {
            return e26_3PlanValue;
        },
        setE26_3Value: function(value) {
            e26_3PlanValue = value;
        },
        getE26_3BearbeitungValue: function() {
            return e26BearbeitungValue/3;
        },
        setE26_3BearbeitungValue: function(value) {
            e26_3BearbeitungValue = value;
        },
        getE26_3WarteschlangeValue: function() {
            return e26WarteschlangeValue/3;
        },
        setE26_3WarteschlangeValue: function(value) {
            e26_3WarteschlangeValue = value;
        },
        getE26_3IstLagerbestandValue: function() {
            return e26_3IstLagerbestandValue;
        },
        setE26_3IstLagerbestandValue: function(value) {
            e26_3IstLagerbestandValue = value;
        },
        getE26_3PlanLagerbestandValue: function() {
            return e26_3PlanLagerbestandValue;
        },
        setE26_3PlanLagerbestandValue: function(value) {
            e26_3PlanLagerbestandValue = value;
        },
        getP3BearbeitungValue: function() {
            return p3WarteschlangeValue;
        },
        setP3BearbeitungValue: function(value) {
            p3WarteschlangeValue = value;
        },
        getP3WarteschlangeValue: function() {
            return p3WarteschlangeValue;
        },
        setP3WarteschlangeValue: function(value) {
            p3WarteschlangeValue = value;
        },
        getP3IstLagerbestandValue: function() {
            return p3IstLagerbestandValue;
        },
        setP3IstLagerbestandValue: function(value) {
            p3IstLagerbestandValue = value;
        },
        getP3PlanLagerbestandValue: function() {
            return p3PlanLagerbestandValue;
        },
        setP3PlanLagerbestandValue: function(value) {
            p3PlanLagerbestandValue = value;
        },
        getP3AbsatzValue: function() {
            return p3AbsatzValue;
        },
        setP3AbsatzValue: function(value) {
            p3AbsatzValue = value;
        },
        getK21BestellungValue: function() {
            return k21BestellungValue;
        },
        setK21BestellungValue: function(value) {
            k21BestellungValue = value;
        },
        getK21BestellungMode: function() {
            return k21BestellungMode;
        },
        setK21BestellungMode: function(value) {
            k21BestellungMode = value;
        },
        getK22BestellungValue: function() {
            return k22BestellungValue;
        },
        setK22BestellungValue: function(value) {
            k22BestellungValue = value;
        },
        getK22BestellungMode: function() {
            return k22BestellungMode;
        },
        setK22BestellungMode: function(value) {
            k22BestellungMode = value;
        },
        getK23BestellungValue: function() {
            return k23BestellungValue;
        },
        setK23BestellungValue: function(value) {
            k23BestellungValue = value;
        },
        getK23BestellungMode: function() {
            return k23BestellungMode;
        },
        setK23BestellungMode: function(value) {
            k23BestellungMode = value;
        },
        getK24BestellungValue: function() {
            return k24BestellungValue;
        },
        setK24BestellungValue: function(value) {
            k24BestellungValue = value;
        },
        getK24BestellungMode: function() {
            return k24BestellungMode;
        },
        setK24BestellungMode: function(value) {
            k24BestellungMode = value;
        },
        getK25BestellungValue: function() {
            return k25BestellungValue;
        },
        setK25BestellungValue: function(value) {
            k25BestellungValue = value;
        },
        getK25BestellungMode: function() {
            return k25BestellungMode;
        },
        setK25BestellungMode: function(value) {
            k25BestellungMode = value;
        },
        getK27BestellungValue: function() {
            return k27BestellungValue;
        },
        setK27BestellungValue: function(value) {
            k27BestellungValue = value;
        },
        getK27BestellungMode: function() {
            return k27BestellungMode;
        },
        setK27BestellungMode: function(value) {
            k27BestellungMode = value;
        },
        getK28BestellungValue: function() {
            return k28BestellungValue;
        },
        setK28BestellungValue: function(value) {
            k28BestellungValue = value;
        },
        getK28BestellungMode: function() {
            return k28BestellungMode;
        },
        setK28BestellungMode: function(value) {
            k28BestellungMode = value;
        },
        getK32BestellungValue: function() {
            return k32BestellungValue;
        },
        setK32BestellungValue: function(value) {
            k32BestellungValue = value;
        },
        getK32BestellungMode: function() {
            return k32BestellungMode;
        },
        setK32BestellungMode: function(value) {
            k32BestellungMode = value;
        },
        getK33BestellungValue: function() {
            return k33BestellungValue;
        },
        setK33BestellungValue: function(value) {
            k33BestellungValue = value;
        },
        getK33BestellungMode: function() {
            return k33BestellungMode;
        },
        setK33BestellungMode: function(value) {
            k33BestellungMode = value;
        },
        getK34BestellungValue: function() {
            return k34BestellungValue;
        },
        setK34BestellungValue: function(value) {
            k34BestellungValue = value;
        },
        getK34BestellungMode: function() {
            return k34BestellungMode;
        },
        setK34BestellungMode: function(value) {
            k34BestellungMode = value;
        },
        getK35BestellungValue: function() {
            return k35BestellungValue;
        },
        setK35BestellungValue: function(value) {
            k35BestellungValue = value;
        },
        getK35BestellungMode: function() {
            return k35BestellungMode;
        },
        setK35BestellungMode: function(value) {
            k35BestellungMode = value;
        },
        getK36BestellungValue: function() {
            return k36BestellungValue;
        },
        setK36BestellungValue: function(value) {
            k36BestellungValue = value;
        },
        getK36BestellungMode: function() {
            return k36BestellungMode;
        },
        setK36BestellungMode: function(value) {
            k36BestellungMode = value;
        },
        getK37BestellungValue: function() {
            return k37BestellungValue;
        },
        setK37BestellungValue: function(value) {
            k37BestellungValue = value;
        },
        getK37BestellungMode: function() {
            return k37BestellungMode;
        },
        setK37BestellungMode: function(value) {
            k37BestellungMode = value;
        },
        getK38BestellungValue: function() {
            return k38BestellungValue;
        },
        setK38BestellungValue: function(value) {
            k38BestellungValue = value;
        },
        getK38BestellungMode: function() {
            return k38BestellungMode;
        },
        setK38BestellungMode: function(value) {
            k38BestellungMode = value;
        },
        getK39BestellungValue: function() {
            return k39BestellungValue;
        },
        setK39BestellungValue: function(value) {
            k39BestellungValue = value;
        },
        getK39BestellungMode: function() {
            return k39BestellungMode;
        },
        setK39BestellungMode: function(value) {
            k39BestellungMode = value;
        },
        getK40BestellungValue: function() {
            return k40BestellungValue;
        },
        setK40BestellungValue: function(value) {
            k40BestellungValue = value;
        },
        getK40BestellungMode: function() {
            return k40BestellungMode;
        },
        setK40BestellungMode: function(value) {
            k40BestellungMode = value;
        },
        getK41BestellungValue: function() {
            return k41BestellungValue;
        },
        setK41BestellungValue: function(value) {
            k41BestellungValue = value;
        },
        getK41BestellungMode: function() {
            return k41BestellungMode;
        },
        setK41BestellungMode: function(value) {
            k41BestellungMode = value;
        },
        getK42BestellungValue: function() {
            return k42BestellungValue;
        },
        setK42BestellungValue: function(value) {
            k42BestellungValue = value;
        },
        getK42BestellungMode: function() {
            return k42BestellungMode;
        },
        setK42BestellungMode: function(value) {
            k42BestellungMode = value;
        },
        getK43BestellungValue: function() {
            return k43BestellungValue;
        },
        setK43BestellungValue: function(value) {
            k43BestellungValue = value;
        },
        getK43BestellungMode: function() {
            return k43BestellungMode;
        },
        setK43BestellungMode: function(value) {
            k43BestellungMode = value;
        },
        getK44BestellungValue: function() {
            return k44BestellungValue;
        },
        setK44BestellungValue: function(value) {
            k44BestellungValue = value;
        },
        getK44BestellungMode: function() {
            return k44BestellungMode;
        },
        setK44BestellungMode: function(value) {
            k44BestellungMode = value;
        },
        getK45BestellungValue: function() {
            return k45BestellungValue;
        },
        setK45BestellungValue: function(value) {
            k45BestellungValue = value;
        },
        getK45BestellungMode: function() {
            return k45BestellungMode;
        },
        setK45BestellungMode: function(value) {
            k45BestellungMode = value;
        },
        getK46BestellungValue: function() {
            return k46BestellungValue;
        },
        setK46BestellungValue: function(value) {
            k46BestellungValue = value;
        },
        getK46BestellungMode: function() {
            return k46BestellungMode;
        },
        setK46BestellungMode: function(value) {
            k46BestellungMode = value;
        },
        getK47BestellungValue: function() {
            return k47BestellungValue;
        },
        setK47BestellungValue: function(value) {
            k47BestellungValue = value;
        },
        getK47BestellungMode: function() {
            return k47BestellungMode;
        },
        setK47BestellungMode: function(value) {
            k47BestellungMode = value;
        },
        getK48BestellungValue: function() {
            return k48BestellungValue;
        },
        setK48BestellungValue: function(value) {
            k48BestellungValue = value;
        },
        getK48BestellungMode: function() {
            return k48BestellungMode;
        },
        setK48BestellungMode: function(value) {
            k48BestellungMode = value;
        },
        getK52BestellungValue: function() {
            return k52BestellungValue;
        },
        setK52BestellungValue: function(value) {
            k52BestellungValue = value;
        },
        getK52BestellungMode: function() {
            return k52BestellungMode;
        },
        setK52BestellungMode: function(value) {
            k52BestellungMode = value;
        },
        getK53BestellungValue: function() {
            return k53BestellungValue;
        },
        setK53BestellungValue: function(value) {
            k53BestellungValue = value;
        },
        getK53BestellungMode: function() {
            return k53BestellungMode;
        },
        setK53BestellungMode: function(value) {
            k53BestellungMode = value;
        },
        getK57BestellungValue: function() {
            return k57BestellungValue;
        },
        setK57BestellungValue: function(value) {
            k57BestellungValue = value;
        },
        getK57BestellungMode: function() {
            return k57BestellungMode;
        },
        setK57BestellungMode: function(value) {
            k57BestellungMode = value;
        },
        getK58BestellungValue: function() {
            return k58BestellungValue;
        },
        setK58BestellungValue: function(value) {
            k58BestellungValue = value;
        },
        getK58BestellungMode: function() {
            return k58BestellungMode;
        },
        setK58BestellungMode: function(value) {
            k58BestellungMode = value;
        },
        getK59BestellungValue: function() {
            return k59BestellungValue;
        },
        setK59BestellungValue: function(value) {
            k59BestellungValue = value;
        },
        getK59BestellungMode: function() {
            return k59BestellungMode;
        },
        setK59BestellungMode: function(value) {
            k59BestellungMode = value;
        },
        getW1TimeValue: function() {
            return w1TimeValue;
        },
        setW1TimeValue: function(value) {
            w1TimeValue = value;
        },
        getW2TimeValue: function() {
            return w2TimeValue;
        },
        setW2TimeValue: function(value) {
            w2TimeValue = value;
        },
        getW3TimeValue: function() {
            return w3TimeValue;
        },
        setW3TimeValue: function(value) {
            w3TimeValue = value;
        },
        getW4TimeValue: function() {
            return w4TimeValue;
        },
        setW4TimeValue: function(value) {
            w4TimeValue = value;
        },
        getW6TimeValue: function() {
            return w6TimeValue;
        },
        setW6TimeValue: function(value) {
            w6TimeValue = value;
        },
        getW7TimeValue: function() {
            return w7TimeValue;
        },
        setW7TimeValue: function(value) {
            w7TimeValue = value;
        },
        getW8TimeValue: function() {
            return w8TimeValue;
        },
        setW8TimeValue: function(value) {
            w8TimeValue = value;
        },
        getW9TimeValue: function() {
            return w9TimeValue;
        },
        setW9TimeValue: function(value) {
            w9TimeValue = value;
        },
        getW10TimeValue: function() {
            return w10TimeValue;
        },
        setW10TimeValue: function(value) {
            w10TimeValue = value;
        },
        getW11TimeValue: function() {
            return w11TimeValue;
        },
        setW11TimeValue: function(value) {
            w11TimeValue = value;
        },
        getW12TimeValue: function() {
            return w12TimeValue;
        },
        setW12TimeValue: function(value) {
            w12TimeValue = value;
        },
        getW13TimeValue: function() {
            return w13TimeValue;
        },
        setW13TimeValue: function(value) {
            w13TimeValue = value;
        },
        getW14TimeValue: function() {
            return w14TimeValue;
        },
        setW14TimeValue: function(value) {
            w14TimeValue = value;
        },
        getW15TimeValue: function() {
            return w15TimeValue;
        },
        setW15TimeValue: function(value) {
            w15TimeValue = value;
        },
        getW1OrderTimeValue: function() {
            return w1OrderTimeValue;
        },
        setW1OrderTimeValue: function(value) {
            w1OrderTimeValue = value;
        },
        getW2OrderTimeValue: function() {
            return w2OrderTimeValue;
        },
        setW2OrderTimeValue: function(value) {
            w2OrderTimeValue = value;
        },
        getW3OrderTimeValue: function() {
            return w3OrderTimeValue;
        },
        setW3OrderTimeValue: function(value) {
            w3OrderTimeValue = value;
        },
        getW4OrderTimeValue: function() {
            return w4OrderTimeValue;
        },
        setW4OrderTimeValue: function(value) {
            w4OrderTimeValue = value;
        },
        getW6OrderTimeValue: function() {
            return w6OrderTimeValue;
        },
        setW6OrderTimeValue: function(value) {
            w6OrderTimeValue = value;
        },
        getW7OrderTimeValue: function() {
            return w7OrderTimeValue;
        },
        setW7OrderTimeValue: function(value) {
            w7OrderTimeValue = value;
        },
        getW8OrderTimeValue: function() {
            return w8OrderTimeValue;
        },
        setW8OrderTimeValue: function(value) {
            w8OrderTimeValue = value;
        },
        getW9OrderTimeValue: function() {
            return w9OrderTimeValue;
        },
        setW9OrderTimeValue: function(value) {
            w9OrderTimeValue = value;
        },
        getW10OrderTimeValue: function() {
            return w10OrderTimeValue;
        },
        setW10OrderTimeValue: function(value) {
            w10OrderTimeValue = value;
        },
        getW11OrderTimeValue: function() {
            return w11OrderTimeValue;
        },
        setW11OrderTimeValue: function(value) {
            w11OrderTimeValue = value;
        },
        getW12OrderTimeValue: function() {
            return w12OrderTimeValue;
        },
        setW12OrderTimeValue: function(value) {
            w12OrderTimeValue = value;
        },
        getW13OrderTimeValue: function() {
            return w13OrderTimeValue;
        },
        setW13OrderTimeValue: function(value) {
            w13OrderTimeValue = value;
        },
        getW14OrderTimeValue: function() {
            return w14OrderTimeValue;
        },
        setW14OrderTimeValue: function(value) {
            w14OrderTimeValue = value;
        },
        getW15OrderTimeValue: function() {
            return w15OrderTimeValue;
        },
        setW15OrderTimeValue: function(value) {
            w15OrderTimeValue = value;
        },
        getSchicht1Value: function() {
            return schicht1Value;
        },
        setSchicht1Value: function(value) {
            schicht1Value = value;
        },
        getSchicht2Value: function() {
            return schicht2Value;
        },
        setSchicht2Value: function(value) {
            schicht2Value = value;
        },
        getSchicht3Value: function() {
            return schicht3Value;
        },
        setSchicht3Value: function(value) {
            schicht3Value = value;
        },
        getSchicht4Value: function() {
            return schicht4Value;
        },
        setSchicht4Value: function(value) {
            schicht4Value = value;
        },
        getSchicht6Value: function() {
            return schicht6Value;
        },
        setSchicht6Value: function(value) {
            schicht6Value = value;
        },
        getSchicht7Value: function() {
            return schicht7Value;
        },
        setSchicht7Value: function(value) {
            schicht7Value = value;
        },
        getSchicht8Value: function() {
            return schicht8Value;
        },
        setSchicht8Value: function(value) {
            schicht8Value = value;
        },
        getSchicht9Value: function() {
            return schicht9Value;
        },
        setSchicht9Value: function(value) {
            schicht9Value = value;
        },
        getSchicht10Value: function() {
            return schicht10Value;
        },
        setSchicht10Value: function(value) {
            schicht10Value = value;
        },
        getSchicht11Value: function() {
            return schicht11Value;
        },
        setSchicht11Value: function(value) {
            schicht11Value = value;
        },
        getSchicht12Value: function() {
            return schicht12Value;
        },
        setSchicht12Value: function(value) {
            schicht12Value = value;
        },
        getSchicht13Value: function() {
            return schicht13Value;
        },
        setSchicht13Value: function(value) {
            schicht13Value = value;
        },
        getSchicht14Value: function() {
            return schicht14Value;
        },
        setSchicht14Value: function(value) {
            schicht14Value = value;
        },
        getSchicht15Value: function() {
            return schicht15Value;
        },
        setSchicht15Value: function(value) {
            schicht15Value = value;
        },
        getSchichtZ1Value: function() {
            return schichtZ1Value;
        },
        setSchichtZ1Value: function(value) {
            schichtZ1Value = value;
        },
        getSchichtZ2Value: function() {
            return schichtZ2Value;
        },
        setSchichtZ2Value: function(value) {
            schichtZ2Value = value;
        },
        getSchichtZ3Value: function() {
            return schichtZ3Value;
        },
        setSchichtZ3Value: function(value) {
            schichtZ3Value = value;
        },
        getSchichtZ4Value: function() {
            return schichtZ4Value;
        },
        setSchichtZ4Value: function(value) {
            schichtZ4Value = value;
        },
        getSchichtZ6Value: function() {
            return schichtZ6Value;
        },
        setSchichtZ6Value: function(value) {
            schichtZ6Value = value;
        },
        getSchichtZ7Value: function() {
            return schichtZ7Value;
        },
        setSchichtZ7Value: function(value) {
            schichtZ7Value = value;
        },
        getSchichtZ8Value: function() {
            return schichtZ8Value;
        },
        setSchichtZ8Value: function(value) {
            schichtZ8Value = value;
        },
        getSchichtZ9Value: function() {
            return schichtZ9Value;
        },
        setSchichtZ9Value: function(value) {
            schichtZ9Value = value;
        },
        getSchichtZ10Value: function() {
            return schichtZ10Value;
        },
        setSchichtZ10Value: function(value) {
            schichtZ10Value = value;
        },
        getSchichtZ11Value: function() {
            return schichtZ11Value;
        },
        setSchichtZ11Value: function(value) {
            schichtZ11Value = value;
        },
        getSchichtZ12Value: function() {
            return schichtZ12Value;
        },
        setSchichtZ12Value: function(value) {
            schichtZ12Value = value;
        },
        getSchichtZ13Value: function() {
            return schichtZ13Value;
        },
        setSchichtZ13Value: function(value) {
            schichtZ13Value = value;
        },
        getSchichtZ14Value: function() {
            return schichtZ14Value;
        },
        setSchichtZ14Value: function(value) {
            schichtZ14Value = value;
        },
        getSchichtZ15Value: function() {
            return schichtZ15Value;
        },
        setSchichtZ15Value: function(value) {
            schichtZ15Value = value;
        },
        getUeberstunden1Value: function() {
            return ueberstunden1Value;
        },
        setUeberstunden1Value: function(value) {
            ueberstunden1Value = value;
        },
        getUeberstunden2Value: function() {
            return ueberstunden2Value;
        },
        setUeberstunden2Value: function(value) {
            ueberstunden2Value = value;
        },
        getUeberstunden3Value: function() {
            return ueberstunden3Value;
        },
        setUeberstunden3Value: function(value) {
            ueberstunden3Value = value;
        },
        getUeberstunden4Value: function() {
            return ueberstunden4Value;
        },
        setUeberstunden4Value: function(value) {
            ueberstunden4Value = value;
        },
        getUeberstunden6Value: function() {
            return ueberstunden6Value;
        },
        setUeberstunden6Value: function(value) {
            ueberstunden6Value = value;
        },
        getUeberstunden7Value: function() {
            return ueberstunden7Value;
        },
        setUeberstunden7Value: function(value) {
            ueberstunden7Value = value;
        },
        getUeberstunden8Value: function() {
            return ueberstunden8Value;
        },
        setUeberstunden8Value: function(value) {
            ueberstunden8Value = value;
        },
        getUeberstunden9Value: function() {
            return ueberstunden9Value;
        },
        setUeberstunden9Value: function(value) {
            ueberstunden9Value = value;
        },
        getUeberstunden10Value: function() {
            return ueberstunden1Value;
        },
        setUeberstunden10Value: function(value) {
            ueberstunden10Value = value;
        },
        getUeberstunden11Value: function() {
            return ueberstunden11Value;
        },
        setUeberstunden11Value: function(value) {
            ueberstunden11Value = value;
        },
        getUeberstunden12Value: function() {
            return ueberstunden12Value;
        },
        setUeberstunden12Value: function(value) {
            ueberstunden12Value = value;
        },
        getUeberstunden13Value: function() {
            return ueberstunden13Value;
        },
        setUeberstunden13Value: function(value) {
            ueberstunden13Value = value;
        },
        getUeberstunden14Value: function() {
            return ueberstunden14Value;
        },
        setUeberstunden14Value: function(value) {
            ueberstunden14Value = value;
        },
        getUeberstunden15Value: function() {
            return ueberstunden15Value;
        },
        setUeberstunden15Value: function(value) {
            ueberstunden15Value = value;
        },
        getUeberstundenZ1Value: function() {
            return ueberstundenZ1Value;
        },
        setUeberstundenZ1Value: function(value) {
            ueberstundenZ1Value = value;
        },
        getUeberstundenZ2Value: function() {
            return ueberstundenZ2Value;
        },
        setUeberstundenZ2Value: function(value) {
            ueberstundenZ2Value = value;
        },
        getUeberstundenZ3Value: function() {
            return ueberstundenZ3Value;
        },
        setUeberstundenZ3Value: function(value) {
            ueberstundenZ3Value = value;
        },
        getUeberstundenZ4Value: function() {
            return ueberstundenZ4Value;
        },
        setUeberstundenZ4Value: function(value) {
            ueberstundenZ4Value = value;
        },
        getUeberstundenZ6Value: function() {
            return ueberstundenZ6Value;
        },
        setUeberstundenZ6Value: function(value) {
            ueberstundenZ6Value = value;
        },
        getUeberstundenZ7Value: function() {
            return ueberstundenZ7Value;
        },
        setUeberstundenZ7Value: function(value) {
            ueberstundenZ7Value = value;
        },
        getUeberstundenZ8Value: function() {
            return ueberstundenZ8Value;
        },
        setUeberstundenZ8Value: function(value) {
            ueberstundenZ8Value = value;
        },
        getUeberstundenZ9Value: function() {
            return ueberstundenZ9Value;
        },
        setUeberstundenZ9Value: function(value) {
            ueberstundenZ9Value = value;
        },
        getUeberstundenZ10Value: function() {
            return ueberstundenZ1Value;
        },
        setUeberstundenZ10Value: function(value) {
            ueberstundenZ10Value = value;
        },
        getUeberstundenZ11Value: function() {
            return ueberstundenZ11Value;
        },
        setUeberstundenZ11Value: function(value) {
            ueberstundenZ11Value = value;
        },
        getUeberstundenZ12Value: function() {
            return ueberstundenZ12Value;
        },
        setUeberstundenZ12Value: function(value) {
            ueberstundenZ12Value = value;
        },
        getUeberstundenZ13Value: function() {
            return ueberstundenZ13Value;
        },
        setUeberstundenZ13Value: function(value) {
            ueberstundenZ13Value = value;
        },
        getUeberstundenZ14Value: function() {
            return ueberstundenZ14Value;
        },
        setUeberstundenZ14Value: function(value) {
            ueberstundenZ14Value = value;
        },
        getUeberstundenZ15Value: function() {
            return ueberstundenZ15Value;
        },
        setUeberstundenZ15Value: function(value) {
            ueberstundenZ15Value = value;
        },
        getLanguageValue : function() {
            return LanguageValue;
        },
        setLanguageValue : function(value) {
            LanguageValue = value;
        },
        getFirstUpdateValue : function() {
            return FirstUpdateValue;
        },
        setFirstUpdateValue : function(value) {
            FirstUpdateValue = value;
        },
        getP1InputValue : function() {
            return p1InputValue;
        },
        setP1InputValue : function(value) {
            p1InputValue = value;
        },
        getP2InputValue : function() {
            return p2InputValue;
        },
        setP2InputValue : function(value) {
            p2InputValue = value;
        },
        getP3InputValue : function() {
            return p3InputValue;
        },
        setP3InputValue : function(value) {
            p3InputValue = value;
        },
        getP1DirektMengeValue : function() {
            return p1DirektMengeValue;
        },
        setP1DirektMengeValue : function(value) {
            p1DirektMengeValue = value;
        },
        getP1DirektPreisValue : function() {
            return p1DirektPreisValue;
        },
        setP1DirektPreisValue : function(value) {
            p1DirektPreisValue = value;
        },
        getP2DirektMengeValue : function() {
            return p2DirektMengeValue;
        },
        setP2DirektMengeValue : function(value) {
            p2DirektMengeValue = value;
        },
        getP2DirektPreisValue : function() {
            return p2DirektPreisValue;
        },
        setP2DirektPreisValue : function(value) {
            p2DirektPreisValue = value;
        },
        getP3DirektMengeValue : function() {
            return p3DirektMengeValue;
        },
        setP3DirektMengeValue : function(value) {
            p3DirektMengeValue = value;
        },
        getP3DirektPreisValue : function() {
            return p3DirektPreisValue;
        },
        setP3DirektPreisValue : function(value) {
            p3DirektPreisValue = value;
        },
        getP1DirektKonvetionalstrafeValue : function() {
            return p1DirektKonvetionalstrafeValue;
        },
        setP1DirektKonvetionalstrafeValue : function(value) {
            p1DirektKonvetionalstrafeValue = value;
        },
        getP2DirektKonvetionalstrafeValue : function() {
            return p2DirektKonvetionalstrafeValue;
        },
        setP2DirektKonvetionalstrafeValue : function(value) {
            p2DirektKonvetionalstrafeValue = value;
        },
        getP3DirektKonvetionalstrafeValue : function() {
            return p3DirektKonvetionalstrafeValue;
        },
        setP3DirektKonvetionalstrafeValue : function(value) {
            p3DirektKonvetionalstrafeValue = value;
        },
        getfq1InputValue : function() {
            return fq1InputValue;
        },
        setfq1InputValue : function(value) {
            fq1InputValue = value;
        },
        getfq2InputValue : function() {
            return fq2InputValue;
        },
        setfq2InputValue : function(value) {
            fq2InputValue = value;
        },
        getfq3InputValue : function() {
            return fq3InputValue;
        },
        setfq3InputValue : function(value) {
            fq3InputValue = value;
        },
        getfq4InputValue : function() {
            return fq4InputValue;
        },
        setfq4InputValue : function(value) {
            fq4InputValue = value;
        },
        getfq5InputValue : function() {
            return fq5InputValue;
        },
        setfq5InputValue : function(value) {
            fq5InputValue = value;
        },
        getfq6InputValue : function() {
            return fq6InputValue;
        },
        setfq6InputValue : function(value) {
            fq6InputValue = value;
        },
        getfq7InputValue : function() {
            return fq7InputValue;
        },
        setfq7InputValue : function(value) {
            fq7InputValue = value;
        },
        getfq8InputValue : function() {
            return fq8InputValue;
        },
        setfq8InputValue : function(value) {
            fq8InputValue = value;
        },
        getfq9InputValue : function() {
            return fq9InputValue;
        },
        setfq9InputValue : function(value) {
            fq9InputValue = value;
        },
        getfq10InputValue : function() {
            return fq10InputValue;
        },
        setfq10InputValue : function(value) {
            fq10InputValue = value;
        },
        getfq11InputValue : function() {
            return fq11InputValue;
        },
        setfq11InputValue : function(value) {
            fq11InputValue = value;
        },
        getfq12InputValue : function() {
            return fq12InputValue;
        },
        setfq12InputValue : function(value) {
            fq12InputValue = value;
        },
        getfq13InputValue : function() {
            return fq13InputValue;
        },
        setfq13InputValue : function(value) {
            fq13InputValue = value;
        },
        getfq14InputValue : function() {
            return fq14InputValue;
        },
        setfq14InputValue : function(value) {
            fq14InputValue = value;
        },
        getfq15InputValue : function() {
            return fq15InputValue;
        },
        setfq15InputValue : function(value) {
            fq15InputValue = value;
        },
        getfq16InputValue : function() {
            return fq16InputValue;
        },
        setfq16InputValue : function(value) {
            fq16InputValue = value;
        },
        getfq17InputValue : function() {
            return fq17InputValue;
        },
        setfq17InputValue : function(value) {
            fq17InputValue = value;
        },
        getfq18InputValue : function() {
            return fq18InputValue;
        },
        setfq18InputValue : function(value) {
            fq18InputValue = value;
        },
        getfq19InputValue : function() {
            return fq19InputValue;
        },
        setfq19InputValue : function(value) {
            fq19InputValue = value;
        },
        getfq20InputValue : function() {
            return fq20InputValue;
        },
        setfq20InputValue : function(value) {
            fq20InputValue = value;
        },
        getfq21InputValue : function() {
            return fq21InputValue;
        },
        setfq21InputValue : function(value) {
            fq21InputValue = value;
        },
        getfq22InputValue : function() {
            return fq22InputValue;
        },
        setfq22InputValue : function(value) {
            fq22InputValue = value;
        },
        getfq23InputValue : function() {
            return fq23InputValue;
        },
        setfq23InputValue : function(value) {
            fq23InputValue = value;
        },
        getfq24InputValue : function() {
            return fq24InputValue;
        },
        setfq24InputValue : function(value) {
            fq24InputValue = value;
        },
        getfq25InputValue : function() {
            return fq25InputValue;
        },
        setfq25InputValue : function(value) {
            fq25InputValue = value;
        },
        getfq26InputValue : function() {
            return fq26InputValue;
        },
        setfq26InputValue : function(value) {
            fq26InputValue = value;
        },
        getfq27InputValue : function() {
            return fq27InputValue;
        },
        setfq27InputValue : function(value) {
            fq27InputValue = value;
        },
        getfq28InputValue : function() {
            return fq28InputValue;
        },
        setfq28InputValue : function(value) {
            fq28InputValue = value;
        },
        getfq29InputValue : function() {
            return fq29InputValue;
        },
        setfq29InputValue : function(value) {
            fq29InputValue = value;
        },
        getfq30InputValue : function() {
            return fq30InputValue;
        },
        setfq30InputValue : function(value) {
            fq30InputValue = value;
        },
        getfq31InputValue : function() {
            return fq31InputValue;
        },
        setfq31InputValue : function(value) {
            fq31InputValue = value;
        },
        getfq32InputValue : function() {
            return fq32InputValue;
        },
        setfq32InputValue : function(value) {
            fq32InputValue = value;
        },
        getfq33InputValue : function() {
            return fq33InputValue;
        },
        setfq33InputValue : function(value) {
            fq33InputValue = value;
        },
        getfq34InputValue : function() {
            return fq34InputValue;
        },
        setfq34InputValue : function(value) {
            fq34InputValue = value;
        },
        getfq35InputValue : function() {
            return fq35InputValue;
        },
        setfq35InputValue : function(value) {
            fq35InputValue = value;
        },
        getfq36InputValue : function() {
            return fq36InputValue;
        },
        setfq36InputValue : function(value) {
            fq36InputValue = value;
        },
        getfq37InputValue : function() {
            return fq37InputValue;
        },
        setfq37InputValue : function(value) {
            fq37InputValue = value;
        },
        getfq38InputValue : function() {
            return fq38InputValue;
        },
        setfq38InputValue : function(value) {
            fq38InputValue = value;
        },
        getfq39InputValue : function() {
            return fq39InputValue;
        },
        setfq39InputValue : function(value) {
            fq39InputValue = value;
        },
        getfq40InputValue : function() {
            return fq40InputValue;
        },
        setfq40InputValue : function(value) {
            fq40InputValue = value;
        },
        getfq41InputValue : function() {
            return fq41InputValue;
        },
        setfq41InputValue : function(value) {
            fq41InputValue = value;
        },
        getfq42InputValue : function() {
            return fq42InputValue;
        },
        setfq42InputValue : function(value) {
            fq42InputValue = value;
        },
        getfq43InputValue : function() {
            return fq43InputValue;
        },
        setfq43InputValue : function(value) {
            fq43InputValue = value;
        },
        getfq44InputValue : function() {
            return fq44InputValue;
        },
        setfq44InputValue : function(value) {
            fq44InputValue = value;
        },
        getfq45InputValue : function() {
            return fq45InputValue;
        },
        setfq45InputValue : function(value) {
            fq45InputValue = value;
        },
        getfq46InputValue : function() {
            return fq46InputValue;
        },
        setfq46InputValue : function(value) {
            fq46InputValue = value;
        },
        getfq47InputValue : function() {
            return fq47InputValue;
        },
        setfq47InputValue : function(value) {
            fq47InputValue = value;
        },
        getfq48InputValue : function() {
            return fq48InputValue;
        },
        setfq48InputValue : function(value) {
            fq48InputValue = value;
        },
        getfq49InputValue : function() {
            return fq49InputValue;
        },
        setfq49InputValue : function(value) {
            fq49InputValue = value;
        },
        getfq50InputValue : function() {
            return fq50InputValue;
        },
        setfq50InputValue : function(value) {
            fq50InputValue = value;
        },
        getfq51InputValue : function() {
            return fq51InputValue;
        },
        setfq51InputValue : function(value) {
            fq51InputValue = value;
        },
        getfq52InputValue : function() {
            return fq52InputValue;
        },
        setfq52InputValue : function(value) {
            fq52InputValue = value;
        },
        getfq53InputValue : function() {
            return fq53InputValue;
        },
        setfq53InputValue : function(value) {
            fq53InputValue = value;
        },
        getfq54InputValue : function() {
            return fq54InputValue;
        },
        setfq54InputValue : function(value) {
            fq54InputValue = value;
        },
        getfq55InputValue : function() {
            return fq55InputValue;
        },
        setfq55InputValue : function(value) {
            fq55InputValue = value;
        },
        getfq56InputValue : function() {
            return fq56InputValue;
        },
        setfq56InputValue : function(value) {
            fq56InputValue = value;
        },
        getfq57InputValue : function() {
            return fq57InputValue;
        },
        setfq57InputValue : function(value) {
            fq57InputValue = value;
        },
        getfq58InputValue : function() {
            return fq58InputValue;
        },
        setfq58InputValue : function(value) {
            fq58InputValue = value;
        },
        getfq59InputValue : function() {
            return fq59InputValue;
        },
        setfq59InputValue : function(value) {
            fq59InputValue = value;
        },
        getfq60InputValue : function() {
            return fq60InputValue;
        },
        setfq60InputValue : function(value) {
            fq60InputValue = value;
        },
        getfa31InputValue : function() {
            return fa31InputValue;
        },
        setfa31InputValue : function(value) {
            fa31InputValue = value;
        },
        getfa32InputValue : function() {
            return fa32InputValue;
        },
        setfa32InputValue : function(value) {
            fa32InputValue = value;
        },
        getfa33InputValue : function() {
            return fa33InputValue;
        },
        setfa33InputValue : function(value) {
            fa33InputValue = value;
        },
        getfa34InputValue : function() {
            return fa34InputValue;
        },
        setfa34InputValue : function(value) {
            fa34InputValue = value;
        },
        getfa35InputValue : function() {
            return fa35InputValue;
        },
        setfa35InputValue : function(value) {
            fa35InputValue = value;
        },
        getfa36InputValue : function() {
            return fa36InputValue;
        },
        setfa36InputValue : function(value) {
            fa36InputValue = value;
        },
        getfa37InputValue : function() {
            return fa37InputValue;
        },
        setfa37InputValue : function(value) {
            fa37InputValue = value;
        },
        getfa38InputValue : function() {
            return fa38InputValue;
        },
        setfa38InputValue : function(value) {
            fa38InputValue = value;
        },
        getfa39InputValue : function() {
            return fa39InputValue;
        },
        setfa39InputValue : function(value) {
            fa39InputValue = value;
        },
        getfa40InputValue : function() {
            return fa40InputValue;
        },
        setfa40InputValue : function(value) {
            fa40InputValue = value;
        }
        ,
        getfa41InputValue : function() {
            return fa41InputValue;
        },
        setfa41InputValue : function(value) {
            fa41InputValue = value;
        },
        getfa42InputValue : function() {
            return fa42InputValue;
        },
        setfa42InputValue : function(value) {
            fa42InputValue = value;
        },
        getfa43InputValue : function() {
            return fa43InputValue;
        },
        setfa43InputValue : function(value) {
            fa43InputValue = value;
        },
        getfa44InputValue : function() {
            return fa44InputValue;
        },
        setfa44InputValue : function(value) {
            fa44InputValue = value;
        },
        getfa45InputValue : function() {
            return fa45InputValue;
        },
        setfa45InputValue : function(value) {
            fa45InputValue = value;
        },
        getfa46InputValue : function() {
            return fa46InputValue;
        },
        setfa46InputValue : function(value) {
            fa46InputValue = value;
        },
        getfa47InputValue : function() {
            return fa47InputValue;
        },
        setfa47InputValue : function(value) {
            fa47InputValue = value;
        },
        getfa48InputValue : function() {
            return fa48InputValue;
        },
        setfa48InputValue : function(value) {
            fa48InputValue = value;
        },
        getfa49InputValue : function() {
            return fa49InputValue;
        },
        setfa49InputValue : function(value) {
            fa49InputValue = value;
        },
        getfa50InputValue : function() {
            return fa50InputValue;
        },
        setfa50InputValue : function(value) {
            fa50InputValue = value;
        },
        getfa51InputValue : function() {
            return fa51InputValue;
        },
        setfa51InputValue : function(value) {
            fa51InputValue = value;
        },
        getfa52InputValue : function() {
            return fa52InputValue;
        },
        setfa52InputValue : function(value) {
            fa52InputValue = value;
        },
        getfa53InputValue : function() {
            return fa53InputValue;
        },
        setfa53InputValue : function(value) {
            fa53InputValue = value;
        },
        getfa54InputValue : function() {
            return fa54InputValue;
        },
        setfa54InputValue : function(value) {
            fa54InputValue = value;
        },
        getfa55InputValue : function() {
            return fa55InputValue;
        },
        setfa55InputValue : function(value) {
            fa55InputValue = value;
        },
        getfa56InputValue : function() {
            return fa56InputValue;
        },
        setfa56InputValue : function(value) {
            fa56InputValue = value;
        },
        getfa57InputValue : function() {
            return fa57InputValue;
        },
        setfa57InputValue : function(value) {
            fa57InputValue = value;
        },
        getfa58InputValue : function() {
            return fa58InputValue;
        },
        setfa58InputValue : function(value) {
            fa58InputValue = value;
        },
        getfa59InputValue : function() {
            return fa59InputValue;
        },
        setfa59InputValue : function(value) {
            fa59InputValue = value;
        },
        getfa60InputValue : function() {
            return fa60InputValue;
        },
        setfa60InputValue : function(value) {
            fa60InputValue = value;
        },
        geta1InputValue : function() {
            return a1InputValue;
        },
        seta1InputValue : function(value) {
            a1InputValue = value;
        },
        getq1InputValue : function() {
            return q1InputValue;
        },
        setq1InputValue : function(value) {
            q1InputValue = value;
        },
        getm1selectedOption : function() {
            return m1selectedOption;
        },
        setm1selectedOption : function(value) {
            m1selectedOption = value;
        },
        geta2InputValue : function() {
            return a2InputValue;
        },
        seta2InputValue : function(value) {
            a2InputValue = value;
        },
        getq2InputValue : function() {
            return q2InputValue;
        },
        setq2InputValue : function(value) {
            q2InputValue = value;
        },
        getm2selectedOption : function() {
            return m2selectedOption;
        },
        setm2selectedOption : function(value) {
            m2selectedOption = value;
        },
        geta3InputValue : function() {
            return a3InputValue;
        },
        seta3InputValue : function(value) {
            a3InputValue = value;
        },
        getq3InputValue : function() {
            return q3InputValue;
        },
        setq3InputValue : function(value) {
            q3InputValue = value;
        },
        getm3selectedOption : function() {
            return m3selectedOption;
        },
        setm3selectedOption : function(value) {
            m3selectedOption = value;
        },
        geta4InputValue : function() {
            return a4InputValue;
        },
        seta4InputValue : function(value) {
            a4InputValue = value;
        },
        getq4InputValue : function() {
            return q4InputValue;
        },
        setq4InputValue : function(value) {
            q4InputValue = value;
        },
        getm4selectedOption : function() {
            return m4selectedOption;
        },
        setm4selectedOption : function(value) {
            m4selectedOption = value;
        },
        geta5InputValue : function() {
            return a5InputValue;
        },
        seta5InputValue : function(value) {
            a5InputValue = value;
        },
        getq5InputValue : function() {
            return q5InputValue;
        },
        setq5InputValue : function(value) {
            q5InputValue = value;
        },
        getm5selectedOption : function() {
            return m5selectedOption;
        },
        setm5selectedOption : function(value) {
            m5selectedOption = value;
        },
        geta6InputValue : function() {
            return a6InputValue;
        },
        seta6InputValue : function(value) {
            a6InputValue = value;
        },
        getq6InputValue : function() {
            return q6InputValue;
        },
        setq6InputValue : function(value) {
            q6InputValue = value;
        },
        getm6selectedOption : function() {
            return m6selectedOption;
        },
        setm6selectedOption : function(value) {
            m6selectedOption = value;
        },
        geta7InputValue : function() {
            return a7InputValue;
        },
        seta7InputValue : function(value) {
            a7InputValue = value;
        },
        getq7InputValue : function() {
            return q7InputValue;
        },
        setq7InputValue : function(value) {
            q7InputValue = value;
        },
        getm7selectedOption : function() {
            return m7selectedOption;
        },
        setm7selectedOption : function(value) {
            m7selectedOption = value;
        },
        geta8InputValue : function() {
            return a8InputValue;
        },
        seta8InputValue : function(value) {
            a8InputValue = value;
        },
        getq8InputValue : function() {
            return q8InputValue;
        },
        setq8InputValue : function(value) {
            q8InputValue = value;
        },
        getm8selectedOption : function() {
            return m8selectedOption;
        },
        setm8selectedOption : function(value) {
            m8selectedOption = value;
        },
        geta9InputValue : function() {
            return a9InputValue;
        },
        seta9InputValue : function(value) {
            a9InputValue = value;
        },
        getq9InputValue : function() {
            return q9InputValue;
        },
        setq9InputValue : function(value) {
            q9InputValue = value;
        },
        getm9selectedOption : function() {
            return m9selectedOption;
        },
        setm9selectedOption : function(value) {
            m9selectedOption = value;
        },
        geta10InputValue : function() {
            return a10InputValue;
        },
        seta10InputValue : function(value) {
            a10InputValue = value;
        },
        getq10InputValue : function() {
            return q10InputValue;
        },
        setq10InputValue : function(value) {
            q10InputValue = value;
        },
        getm10selectedOption : function() {
            return m10selectedOption;
        },
        setm10selectedOption : function(value) {
            m10selectedOption = value;
        },
        geta11InputValue : function() {
            return a11InputValue;
        },
        seta11InputValue : function(value) {
            a11InputValue = value;
        },
        getq11InputValue : function() {
            return q11InputValue;
        },
        setq11InputValue : function(value) {
            q11InputValue = value;
        },
        getm11selectedOption : function() {
            return m11selectedOption;
        },
        setm11selectedOption : function(value) {
            m11selectedOption = value;
        },
        geta12InputValue : function() {
            return a12InputValue;
        },
        seta12InputValue : function(value) {
            a12InputValue = value;
        },
        getq12InputValue : function() {
            return q12InputValue;
        },
        setq12InputValue : function(value) {
            q12InputValue = value;
        },
        getm12selectedOption : function() {
            return m12selectedOption;
        },
        setm12selectedOption : function(value) {
            m12selectedOption = value;
        },
        geta13InputValue : function() {
            return a13InputValue;
        },
        seta13InputValue : function(value) {
            a13InputValue = value;
        },
        getq13InputValue : function() {
            return q13InputValue;
        },
        setq13InputValue : function(value) {
            q13InputValue = value;
        },
        getm13selectedOption : function() {
            return m13selectedOption;
        },
        setm13selectedOption : function(value) {
            m13selectedOption = value;
        },
        geta14InputValue : function() {
            return a14InputValue;
        },
        seta14InputValue : function(value) {
            a14InputValue = value;
        },
        getq14InputValue : function() {
            return q14InputValue;
        },
        setq14InputValue : function(value) {
            q14InputValue = value;
        },
        getm14selectedOption : function() {
            return m1selectedOption;
        },
        setm14selectedOption : function(value) {
            m14selectedOption = value;
        },
        geta15InputValue : function() {
            return a15InputValue;
        },
        seta15InputValue : function(value) {
            a15InputValue = value;
        },
        getq15InputValue : function() {
            return q15InputValue;
        },
        setq15InputValue : function(value) {
            q15InputValue = value;
        },
        getm15selectedOption : function() {
            return m15selectedOption;
        },
        setm15selectedOption : function(value) {
            m15selectedOption = value;
        },
        geta16InputValue : function() {
            return a16InputValue;
        },
        seta16InputValue : function(value) {
            a16InputValue = value;
        },
        getq16InputValue : function() {
            return q16InputValue;
        },
        setq16InputValue : function(value) {
            q16InputValue = value;
        },
        getm16selectedOption : function() {
            return m16selectedOption;
        },
        setm16selectedOption : function(value) {
            m16selectedOption = value;
        },
        geta17InputValue : function() {
            return a17InputValue;
        },
        seta17InputValue : function(value) {
            a17InputValue = value;
        },
        getq17InputValue : function() {
            return q17InputValue;
        },
        setq17InputValue : function(value) {
            q17InputValue = value;
        },
        getm17selectedOption : function() {
            return m17selectedOption;
        },
        setm17selectedOption : function(value) {
            m17selectedOption = value;
        },
        geta18InputValue : function() {
            return a18InputValue;
        },
        seta18InputValue : function(value) {
            a18InputValue = value;
        },
        getq18InputValue : function() {
            return q18InputValue;
        },
        setq18InputValue : function(value) {
            q18InputValue = value;
        },
        getm18selectedOption : function() {
            return m18selectedOption;
        },
        setm18selectedOption : function(value) {
            m18selectedOption = value;
        },
        geta19InputValue : function() {
            return a19InputValue;
        },
        seta19InputValue : function(value) {
            a19InputValue = value;
        },
        getq19InputValue : function() {
            return q19InputValue;
        },
        setq19InputValue : function(value) {
            q19InputValue = value;
        },
        getm19selectedOption : function() {
            return m19selectedOption;
        },
        setm19selectedOption : function(value) {
            m19selectedOption = value;
        },
        geta20InputValue : function() {
            return a20InputValue;
        },
        seta20InputValue : function(value) {
            a20InputValue = value;
        },
        getq20InputValue : function() {
            return q20InputValue;
        },
        setq20InputValue : function(value) {
            q20InputValue = value;
        },
        getm20selectedOption : function() {
            return m20selectedOption;
        },
        setm20selectedOption : function(value) {
            m20selectedOption = value;
        },
        geta21InputValue : function() {
            return a21InputValue;
        },
        seta21InputValue : function(value) {
            a21InputValue = value;
        },
        getq21InputValue : function() {
            return q21InputValue;
        },
        setq21InputValue : function(value) {
            q21InputValue = value;
        },
        getm21selectedOption : function() {
            return m21selectedOption;
        },
        setm21selectedOption : function(value) {
            m21selectedOption = value;
        },
        geta22InputValue : function() {
            return a22InputValue;
        },
        seta22InputValue : function(value) {
            a22InputValue = value;
        },
        getq22InputValue : function() {
            return q22InputValue;
        },
        setq22InputValue : function(value) {
            q22InputValue = value;
        },
        getm22selectedOption : function() {
            return m22selectedOption;
        },
        setm22selectedOption : function(value) {
            m22selectedOption = value;
        },
        geta23InputValue : function() {
            return a23InputValue;
        },
        seta23InputValue : function(value) {
            a23InputValue = value;
        },
        getq23InputValue : function() {
            return q23InputValue;
        },
        setq23InputValue : function(value) {
            q23InputValue = value;
        },
        getm23selectedOption : function() {
            return m23selectedOption;
        },
        setm23selectedOption : function(value) {
            m23selectedOption = value;
        },
        geta24InputValue : function() {
            return a24InputValue;
        },
        seta24InputValue : function(value) {
            a24InputValue = value;
        },
        getq24InputValue : function() {
            return q24InputValue;
        },
        setq24InputValue : function(value) {
            q24InputValue = value;
        },
        getm24selectedOption : function() {
            return m24selectedOption;
        },
        setm24selectedOption : function(value) {
            m24selectedOption = value;
        },
        geta25InputValue : function() {
            return a25InputValue;
        },
        seta25InputValue : function(value) {
            a25InputValue = value;
        },
        getq25InputValue : function() {
            return q25InputValue;
        },
        setq25InputValue : function(value) {
            q25InputValue = value;
        },
        getm25selectedOption : function() {
            return m25selectedOption;
        },
        setm25selectedOption : function(value) {
            m25selectedOption = value;
        },
        geta26InputValue : function() {
            return a26InputValue;
        },
        seta26InputValue : function(value) {
            a26InputValue = value;
        },
        getq26InputValue : function() {
            return q26InputValue;
        },
        setq26InputValue : function(value) {
            q26InputValue = value;
        },
        getm26selectedOption : function() {
            return m26selectedOption;
        },
        setm26selectedOption : function(value) {
            m26selectedOption = value;
        },
        geta27InputValue : function() {
            return a27InputValue;
        },
        seta27InputValue : function(value) {
            a27InputValue = value;
        },
        getq27InputValue : function() {
            return q27InputValue;
        },
        setq27InputValue : function(value) {
            q27InputValue = value;
        },
        getm27selectedOption : function() {
            return m27selectedOption;
        },
        setm27selectedOption : function(value) {
            m27selectedOption = value;
        },
        geta28InputValue : function() {
            return a28InputValue;
        },
        seta28InputValue : function(value) {
            a28InputValue = value;
        },
        getq28InputValue : function() {
            return q28InputValue;
        },
        setq28InputValue : function(value) {
            q28InputValue = value;
        },
        getm28selectedOption : function() {
            return m28selectedOption;
        },
        setm28selectedOption : function(value) {
            m28selectedOption = value;
        },
        geta29InputValue : function() {
            return a29InputValue;
        },
        seta29InputValue : function(value) {
            a29InputValue = value;
        },
        getq29InputValue : function() {
            return q29InputValue;
        },
        setq29InputValue : function(value) {
            q29InputValue = value;
        },
        getm29selectedOption : function() {
            return m29selectedOption;
        },
        setm29selectedOption : function(value) {
            m29selectedOption = value;
        },
        geta30InputValue : function() {
            return a30InputValue;
        },
        seta30InputValue : function(value) {
            a30InputValue = value;
        },
        getq30InputValue : function() {
            return q30InputValue;
        },
        setq30InputValue : function(value) {
            q30InputValue = value;
        },
        getm30selectedOption : function() {
            return m30selectedOption;
        },
        setm30selectedOption : function(value) {
            m30selectedOption = value;
        },
        getp1Direktverkauf : function() {
            return p1Direktverkauf;
        },
        setp1Direktverkauf : function(value) {
            p1Direktverkauf = value;
        },
        getp2Direktverkauf : function() {
            return p2Direktverkauf;
        },
        setp2Direktverkauf : function(value) {
            p2Direktverkauf = value;
        },
        getp3Direktverkauf : function() {
            return p3Direktverkauf;
        },
        setp3Direktverkauf : function(value) {
            p3Direktverkauf = value;
        }
    }
});