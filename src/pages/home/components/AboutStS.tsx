import { useState } from "react";
import "./AboutSts.css";

export default function AboutStS() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="about-sts">
            <h1>About Setting the Stage</h1>
            <p>
                Step into the shoes of an aspiring stage manager in Setting the Stage, where your task
                is to assemble the right musicians and instruments to bring each performance to life.
                You’ll manage a quirky cast of musicians, each with their own strengths and personalities,
                and find the perfect combinations to meet the challenges of every stage. <br /><br />
                Start small, wow your audiences, and climb your way up in the world of music staging and performance.
                With every night comes a new show—can you set the stage for a flawless performance?
            </p>
            <br/>
            <h2>The Story So Far...</h2>
            {/* Read More Toggle */}
            <p>
                <span
                    onClick={() => setExpanded(!expanded)}
                    style={{ color: "#4E86C5", cursor: "pointer" }}
                >
                    {expanded ? "Show Less" : "Read More"}
                </span>
            </p>

            {/* Collapsible Story */}
            <div className={`story-so-far ${expanded ? "expanded" : ""}`}>
                <p>
                    A dated neon sign hangs outside the bar, soaking the dimly lit street in a sharp, purple glow. It reads “open”, but it doesn't really tell you anything new, since it’s clear that the place is open. There's chatter and the sound of glasses clinking coming from inside, some light thumping rock music that you can't quite make out, and the dim orange glow of indoor mood lighting trying to escape from the ancient-looking frosted windows. You take a deep breath and push on the heavy wooden door, stepping inside.
                    <br /><br />
                    The familiar smells of the bar wash over you immediately, engulfing your every sense. The smell: happy and cosy. The sounds: warm and relaxed. It looks exactly as you would expect- local, but a little rough around the edges. You can taste the pastimes of cigarettes and spilled beer on your tongue, and feel the years of the latter squelching under your feet as you take a step towards the bar in front of you. Loudly, the door closes behind you.
                    <br /><br />
                    Only two people turn to look for more than a second - one ragtag-looking guy on a dark, cluttered stage off to your right, and the bartender. He looks at you with a sort of confused curiosity. You suppose there aren't many newcomers here.
                    <br /><br />
                    Tonight, you are surprised too. It wasn't a very good day, and it hasn't been a very good year at all, actually. Today was just a nail in the coffin, and you decided it was time to get a late-night drink, alone. Since you hadn't been in the area very long, you hadn't even noticed that this place was here before now. A quick online search revealed that this was walking distance, though; so a quick walk through the brisk autumn evening air had led you down this rabbit-hole. Or into it, so to speak.
                    <br /><br />
                    You grab a beer from the rough-looking guy serving drinks at the bar. He has a certain calmness and comfort about him that makes him seem like the owner of the place. After he hands over the handle, the interaction consisting of mostly single-worded back and forth, he goes to wipe the bar in a way that makes you wonder if he's maybe seen too many movies and expected you to tell him something interesting. “Maybe not yet”, you think to yourself, trudging to a table off towards the stage at the far right end of the room.
                    <br /><br />
                    As you settle into your seat, you glance over at the stage again. The ragtag guy is now fiddling with some cables, his frustration evident as he mutters under his breath. He’s clearly struggling with the setup, and it becomes apparent that tonight's entertainment might be at risk if he can't get things in order. The patrons don't seem to mind too much, but there's a noticeable dip in the energy whenever the music cuts out and the hum of conversation takes over.
                    <br /><br />
                    You take a sip of your beer, savouring the bitter taste. The events of the day play back in your mind like a broken record. It’s been a tough year, and the solitude in this dimly lit bar feels oddly comforting. Your eyes wander around the room, taking in the faded posters and worn-out furniture, remnants of better days. There’s a part of you that wants to be invisible, to disappear into the background noise and the haze of cigarette smoke.
                    <br /><br />
                    But then, something stirs inside you as you watch the guy on stage drop a cable and curse under his breath. You recognize that look of frustration and the weight of a bad day piling up. Before you can second-guess yourself, you find yourself getting up and walking towards the stage. Maybe it’s the beer, maybe it’s the need to distract yourself, or maybe it’s just the sense of camaraderie with a fellow human having a rough night.
                    <br /><br />
                    “Hey, need a hand?” you ask, your voice surprising even yourself with its steadiness.
                    <br /><br />
                    The guy looks up, a mixture of relief and scepticism crossing his face. “You know anything about sound equipment?” he asks, a bit wary.
                    <br /><br />
                    “A bit,” you reply with a shrug. “And besides, it looks like you could use the help.”
                    <br /><br />
                    He nods, handing you a tangled mess of cables. “Thanks, man. The name’s Pete, by the way.” His ragged hair and clothes have seen better days, but he looks like he owns his look. He’s tall and not very muscular and in his late twenties, or so. A friendly hand extends towards you for a handshake.
                    <br /><br />
                    “Nice to meet you, Pete. I’m just trying to get through a bad day.” You shake his hand.
                    <br /><br />
                    “Well, welcome to the club,” Pete says with a half-smile. “Let’s see if we can’t turn things around, huh?”
                    <br /><br />
                    As you start to untangle the cables and help set up the equipment, you notice a small group of musicians huddled together offstage, looking unsure of what to do next. They glance at Pete, and he notices and shrugs back. It hits you that Pete is not just struggling with the equipment, but with organising the whole show. You take a deep breath and decide to step up.
                    <br /><br />
                    “Hey, Pete,” you say, “how about I help you manage the stage tonight? I can handle the equipment and coordinate with the performers.”
                    <br /><br />
                    Pete looks at you, surprised but clearly relieved. “You’d do that?”
                    <br /><br />
                    “Sure,” you reply, feeling a spark of energy. “Let’s get this show running smoothly.” It’s something of a passion of mine, anyway.
                    <br /><br />
                    You walk over to the musicians, introducing yourself and quickly assessing their needs. You start giving directions, assigning spots on the stage, ensuring everyone knows when and where to play. The musicians, initially hesitant, begin to fall into place under your guidance. You adjust the microphones, test the sound levels, and soon the stage starts to come alive with a sense of order.
                    <br /><br />
                    Maybe tonight won't just be another bad memory after all. Maybe it’s the start of something better.

                </p>
            </div>
        </div>
    );
}