#include "adafruit-led-backpack/adafruit-led-backpack.h"
int alc = A2;
double booze;
double renderBooze;


Adafruit_7segment matrix = Adafruit_7segment();

void setup() {
 pinMode(alc,INPUT);
 Particle.variable("bac", &renderBooze, DOUBLE);
#ifndef __AVR_ATtiny85__
  Serial.begin(9600);
  Serial.println("7 Segment Backpack Test");
#endif
  matrix.begin(0x70);
}

void loop() {
     booze = analogRead(alc);
//   renderBooze=float(booze - 700) / 5000.;
//   renderBooze=(booze/1000)*0.21 - .03;
     renderBooze=(booze/1000)*0.33 - .2;
     if (renderBooze < 0) renderBooze = 0.;
     matrix.print(renderBooze);
     matrix.writeDisplay();
     delay(500);

}