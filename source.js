$(function() {

    var polySynth = new Tone.PolySynth(10, Tone.Synth).toMaster();
    var c4 = false, cs4 = false, d4 = false, ds4 = false, e4 = false, f4 = false, fs4 = false, g4 = false, gs4 = false, a4 = false, as4 = false, b4 = false
    var c5 = false;

    $(window).keydown(function(e) {
        if(e.which==65 && !c4){
            polySynth.triggerAttack(["C4"]);
            c4 = true;
        }
        else if(e.which==87 && !cs4){
            polySynth.triggerAttack(["C#4"]);
            d4 = true;
        }
        else if(e.which==83 && !d4){
            polySynth.triggerAttack(["D4"]);
            d4 = true;
        }
        else if(e.which==69 && !ds4){
            polySynth.triggerAttack(["D#4"]);
            ds4 = true;
        }
        else if(e.which==68 && !e4){
            polySynth.triggerAttack(["E4"]);
            e4 = true;
        }
        else if(e.which==70 && !f4){
            polySynth.triggerAttack(["F4"]);
            f4 = true;
        }
        else if(e.which==84 && !fs4){
            polySynth.triggerAttack(["F#4"]);
            fs4 = true;
        }
        else if(e.which==71 && !g4){
            polySynth.triggerAttack(["G4"]);
            g4 = true;
        }
        else if(e.which==89 && !gs4){
            polySynth.triggerAttack(["G#4"]);
            gs4 = true;
        }
        else if(e.which==72 && !a4){
            polySynth.triggerAttack(["A4"]);
            a4 = true;
        }
        else if(e.which==85 && !as4){
            polySynth.triggerAttack(["A#4"]);
            as4 = true;
        }
        else if(e.which==74 && !b4){
            polySynth.triggerAttack(["B4"]);
            b4 = true;
        }
        else if(e.which==75 && !c5){
            polySynth.triggerAttack(["C5"]);
            c5 = true;
        }
    }).keyup(function(e) {
        if(e.which==65){
            polySynth.triggerRelease(["C4"]);
            c4 = false;
        }
        else if(e.which==87){
            polySynth.triggerRelease(["C#4"]);
            d4 = false;
        }
        else if(e.which==83){
            polySynth.triggerRelease(["D4"]);
            d4 = false;
        }
        else if(e.which==69){
            polySynth.triggerRelease(["D#4"]);
            ds4 = false;
        }
        else if(e.which==68){
            polySynth.triggerRelease(["E4"]);
            e4 = false;
        }
        else if(e.which==70){
            polySynth.triggerRelease(["F4"]);
            f4 = false;
        }
        else if(e.which==84){
            polySynth.triggerRelease(["F#4"]);
            fs4 = false;
        }
        else if(e.which==71){
            polySynth.triggerRelease(["G4"]);
            g4 = false;
        }
        else if(e.which==89){
            polySynth.triggerRelease(["G#4"]);
            gs4 = false;
        }
        else if(e.which==72){
            polySynth.triggerRelease(["A4"]);
            a4 = false;
        }
        else if(e.which==85){
            polySynth.triggerRelease(["A#4"]);
            as4 = false;
        }
        else if(e.which==74){
            polySynth.triggerRelease(["B4"]);
            b4 = false;
        }
        else if(e.which==75){
            polySynth.triggerRelease(["C5"]);
            c5 = false;
        }
    });
});