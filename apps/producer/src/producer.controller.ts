import { faker } from '@faker-js/faker';
import { Controller, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Timeout } from '@nestjs/schedule';
import { Article, User } from '@prisma/client';
import { randomUUID } from 'crypto';
import { lastValueFrom } from 'rxjs';

@Controller()
export class ProducerController {
  constructor(@Inject('PRODUCER_SERVICE') private kafkaClient: ClientKafka) {}

  @Timeout(1000)
  async execute() {
    const users: User[] = [];
    const articles: Article[] = [];

    for (let i = 0; i < 5000; i++) {
      users.push({
        id: randomUUID(),
        status: 'ACTIVE',
        name: faker.person.fullName(),
        username: randomUUID(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    for (const user of users) {
      for (let i = 0; i < 100; i++) {
        articles.push({
          id: randomUUID(),
          status: 'ACTIVE',
          title:
            'ah deport knickers underneath whereas freely unless across humiliating quiet truly',
          body: "ah deport knickers underneath whereas freely unless across humiliating quiet truly illiterate door nor vacantly out whoa yuck bravely woot when ack excitedly likewise nor sedately stalk attached demystify in actually righteously hope yet expunge ha punctual seagull plump supposing predict since unto debit regarding if almost loose finally green lively bloat questionably than plumber furthermore fabulous provided failing whole cleverly once rough amongst that creche while aha abaft bewitched apropos adventurous how wonderfully austere besides but aside jovially kindly rankle duh um hoodwink utter mountainous call boulder ouch badger behind dungarees er foolish firsthand ah at upon indeed experimentation indeed once eek sour cribbage bayou happy-go-lucky whoever hence sans real afterwards abolish likewise versus forenenst gently pale packet bloom castigate tobacco why whoa icy shoulder ambassador if gadzooks ah indeed qualification limber lovely whoever yieldingly comfortable rejig ick boohoo brr as ick whup afore tom-tom dawn consequently happy-go-lucky jovial hourly yahoo failing cleverly gadzooks pfft or gadzooks back line freelance gripping sometimes frantically overlooked ex-wife quietly pro beneath earplug sugar likewise kip dependent trampoline magnet armour gah stinger elevate sunlamp whose sampan marker above after excluding forenenst inasmuch mmm including toy consequently blah after boo surmount swaddle the yearningly and astride er athwart spar homogenate hence whereas swill unless pfft unhitch routine fooey duh affirm hydrocarbon unbuckle chasten interestingly instantly quirkily windscreen meditate what eek abaft um contextualize peep vibrant whoever excepting so hm lest alienated lest seek yowza or against whereas blah innocently immediately coral aside learning near among inasmuch uh-huh until vouch bowl bogus formal comfortable of or voluminous because whoever cosh outside thumb lighthearted opposite ick generally light finally raffle yet however mid geez although scarcely cuisine eavesdrop mmm across after wherever position atop washer from gas assemble nutrient ack vide after intent mmm furthermore fatally why yearningly mmm true duh upshift derail spectacular energetically always famously whoever negligee whiten brr eek right aw yowza nervously till but suddenly whoa dictionary ah eek finally but rightfully ah meter concentration furthermore subexpression married when far-off repulsive unless alongside enshroud composed jump relative interviewer pin solidly industrialize impure out replenish at unless curtain what wee vivaciously liquidize hmph innocent irritably past fondly circa oof yesterday unnecessarily repeatedly whether unless kindly linear excepting loyally inside boohoo very attractive downforce quarrelsomely assail congregation surprisingly diarist aw loop vaccinate because actually bashfully mindless song notwithstanding per knavishly onto as impressive exhilarate kindly fooey shrilly astronomy aw what sick consequently slit truthfully nectar aw justly beside kookily concerning winding upon ultimately properly nicely nocturnal stack solidly normal versus whether redo numb valiantly music tinted leaf righteously excluding how qua whoa campaigning conspire trowel eek usually pish than pace fat amputate deceivingly warble leafy off function pick uncomfortable unless furlough ultimately who unbearably yippee withdraw whenever mechanically topsail throughout drat flugelhorn as for pendant boohoo barring yahoo prioritize hook rapid within brightly aggressive ouch successfully foreclose vibrate misfit briskly badly er vote meh eek utterly wrathful furthermore selfishly snuck suspicious galvanise willfully enchanted amidst randomisation verbally beside reproachfully localise flame preview yieldingly against eek mortally whopping starry supposing whereas testimonial kit under grab upon by even adorable between mobility yuck even pfft perfectly whenever beside common for deviance aha oh feisty beastie pointed drat great domain likewise chasm unseat lawmaker ick for thorough pack amid whereas woot whoever after offensively blah threaten decent rosy roar so beyond long full before miserly for questioningly tomorrow ironclad but of unless disagree likewise united energetically huzzah invest interviewer as than mmm supposing geez unfit stake quizzically cannulate aha fledgling whose think bumpy puny steep till wretched fiercely effacement ew around psst mmm closely examination grandpa within boo best-seller since dirt surfboard before ack drat unscramble fruitful tire throughout querulous yuck nor refine versus through er mist ha including suite alive challenge samovar whose loosely as devoted sympathize needle boil spotless unless guillotine gleefully hence scented wren amongst times charter extremely mid whoa energize ha till lambkin quizzically wherever sustenance after valid minimum foolhardy hull when gosh anenst surprisingly hmph once minus platform buoy majestically powerfully stacking sharply shakily mass above minus duh impoverish localize earthworm behaviour sight meh depict unruly every shady till embody costume popular happily pish if during well-to-do revitalize gah muster whose pagoda however via though likewise meh failing pish bah sympathetically than powerfully fondly concerning deliberation carefully brr striped eek towards dismantle joshingly ah whoa bet noisily deport consent shortlist colorful if recipient more intelligent understate zowie even sympathetically rusty drop necessary vivacious collectivization youthfully secondary abaft in hmph earmark knowledgeably er bobcat ugh plus disorient meaty under online around vaguely whenever anti ruin scythe refer unlike about for upwardly lightly collate out hopelessly unexpectedly nicely briefly lament sourwood initialise pish since whether quaintly fruitful idolize ugh angrily ah although agonizing truck concerning noisily phew whereas hop fervently meanwhile given per happily now quantify whenever generously excluding trespass tricky however yacht alongside behind finally toggle decent whoa ew site orderly oh yuck jack excitement behind provided fancy hence outside colonisation sightseeing aha useful opposite ick incidentally festoon ensue interestingly plaintive deport whoa mint meanwhile frankly increase tot because rumor brr woot scaly notwithstanding haunting wearily huzzah chatter softly without anise throughout huzzah whoa rightfully corral dearly by huzzah constant frightfully round liquidate strictly concerning enraged proper grubby yum yowza positively frankly honorable scarcely near rediscover above workout heavenly for gee markup dose animated conductor dirty impeccable woot gifted outmanoeuvre intern frenetically deeply pointed qua oh boiling even from carbonize but forenenst onto er midst nor including kindly debrief undo ideal that meh gamble circa unhealthy assume excluding suspiciously wig rug passenger pailful furthermore within whose hence savour hull yahoo excitedly upbeat unmask boastfully determined mind uniform silver supposing shrilly courageously finally accessory tab instruct restoration wilted so abdomen unnaturally extremely nicely whether vinyl unlined because meanwhile downright daughter resume vaguely staid unless pish libel thesis seal afore van boastfully outgoing over furthermore euthanise candelabra in wane vice except between gee acrobatic meanwhile yet group unnecessarily how agonizing mistake crazy politely midst unfold present restructure plus uh-huh from tremendous curiously prompt less blindly up sometimes overdub ah drat justly freely watchful deal athwart row why of less end claim bountiful gnaw outside defiantly suspiciously urgently afore chicory nail while junker hmph undermine pertinent for heartfelt if troubled aha setback before clinic baptize excepting knowing oval easily nervously excluding once cormorant whose beyond finally per eek galley absent whenever pish yuck subsidise scientific cappelletti but alongside bah as respectful seat too disrespect hence shinny unwelcome though partake tam-o'-shanter nearly rerun playroom delightfully if abrade unless including niche truthfully brr rear gee stink unimpressively lamp grumpy often upon engulf adjourn sorrowful android mistrust for onto zowie whose spoil digress well-made naturally occasion speaking acquit till truly sparse homonym never start wiring annual programming safely talkative about revolving dapper chuck apud emerge short beside an before frank frozen obnoxiously versus rapidly meh whose lump wide-eyed reunite really eat now truly frost reasoning abaft socialism or who hype clearly stiffen inside because annual furthermore apology past an what abbey opposite apropos predate memorialize meh stiff athwart stark aha before courageously pimple beautifully phew worth compassionate elastic upload riddle heavenly slow but though cultured and besides fondly knowledgeable reintroduce ultimately inasmuch till kiss ouch lavish lest yet interesting competent repeatedly because per pocketbook and sharply burp misguided so whereas schtup downright retract upset bifurcate obedient past amongst across healthily unless afore ah before gracious hidden modulo dirty maid mambo among opposite intensely safely scented on disperse harangue gee joyfully considering sick yahoo rally ouch uselessly yet draw but likewise ugh blah kindly um duh sarcastic ha anenst earnest apropos easel fondly plus yippee amnesty jaggedly yum er eek minister repayment interpret oh timpani disloyal glacier beret aw even bisect funny stream timely failing svelte ew phew sourwood remove sourwood opposite since healthily helpfully phew blah upon jovially mushy dugout meh glamorous because toward where quizzically procreate brr accidentally from leading longingly selfishly psst pace meanwhile puzzling selfishly so cleric deracinate bitmap riverbed shelter step-uncle dot merrily the helplessly fully shakily costly ah sniveling foolishly tiptoe glen next wherever though exc",
          subtitle:
            'ah deport knickers underneath whereas freely unless across humiliating quiet truly',
          userId: user.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    for (const user of users) {
      await lastValueFrom(this.kafkaClient.emit('users', JSON.stringify(user)));
    }

    for (const article of articles) {
      await lastValueFrom(
        this.kafkaClient.emit('articles', JSON.stringify(article)),
      );
    }
  }
}