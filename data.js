/*
    Data
*/
// how much to buy soldier
var buy = {
    bear : 2,         
    knight: 8,
    dragon: 100
}
/*
    data of knight
*/
var player_knight_data = {
    hp:10,              // hp of knight
    min_damage:2,       // minimum damage
    max_damage:4,       // maxmum damage
    isAttacking:0,      // attack state
    image: 'chara5.png',
    vx:1,               // move velocity
    x: 16,              // initial x
    y: 72,              // initial y
    move_frame:[18, 23], // move frame from 18 to 23
    gold: 10 // give enemy 10 gold if died
}
var enemy_knight_data = {
    hp:10,
    min_damage:2,       // minimum damage
    max_damage:4,       // maxmum damage
    isAttacking:0,      // attack state
    image: 'chara5.png',
    vx:-1,               // move velocity
    x:464,              
    y:72,
    move_frame:[18, 23], // move frame from 18 to 23
    gold: 10 // give enemy 10 golid if died
}

var bear = {
    hp:20,
    damage: 0.5,
    gold: 2,
    x: 16,
    y: 72,
    vx: 0.5,
    by: 0,
    frame: 18,
    image: 'space3.png',
    isAttacking: 0 // attack state
}









