export const languages = {
  cs: 'Čeština',
  en: 'English',
} as const;

export const ui = {
  cs: {
    index : {
      'topblurb' : 'Myofunkční terapie pomocí ultrazvukového bio-feedbacku',
      'book' : 'Rezervace',
      'about_title' : '<strong>SonoMyo</strong>: jazyk na správném místě.',
      'about_text' : 'Mnoho lidí je překvapeno, když zjistí, jak moc mohou každodenní návyky a svalové vzorce úst a jayzka ovlivnit způsob, jakým dýcháme, jíme, rosteme a cítíme se. Naším cílem je jednoduchý: pomoci vám (nebo vašemu dítěti) vybudovat si zdravé motorické návyky jazyka a úst, které vydrží – krok za krokem a s povzbuzením na cestě.',
      'remote_consultation_title' : 'Online konzultace',
      'remote_consultation_text' : 'Nejste si jisti, zda-li je terapie pro vás? Poradíme vám bez nutnosti osobní návštěvy.',
      'inperson_consultation_title' : 'Osobně',
      'inperson_consultation_text' : 'Přijďte za námi do ordinace.',
      'difference_title' : 'Čím se <strong>odlišujeme</strong>?',
      'difference_text' : '<strong>SonoMyo</strong> je první a jediná praxe v Čechách, která využívá <strong>ultrazvukový biofeedback</strong> k vedení terapie, jejímu urychlení a zvýšení její účinnosti. </br></br> Ultrazvuk vám umožňuje <strong>vidět pohyb jazyka v reálném čase</strong>, takže nemusíte hádat, zda cvik provádíte správně. Tato vizuální zpětná vazba pomáhá se naučit správné motorické návyky rychleji a přesněji – podporuje <strong>lepší držení jazyka, dýchací návyky, polykání a srozumitelnou řeč</strong>. <br><br> Ultrazvuk je jemný, bezpečný a neinvazivní: malá sonda spočívá pod bradou, zatímco vás krok za krokem vedeme v cvičení. <br><br> Mám 20 let zkušeností s výzkumem ultrazvukem řízené biofeedbacku v logopedii a artikulačním tréninku a jeho účinnost jsem prokázala v řadě studií. Se SonoMyo přináším tento špičkový terapeutický přístup svím klientům v podobě myofunkční terapie. </br></br> <strong>MSc. Tanja Kocjančič Antolík, PhD</strong> <br> <em>Logoped a certifikovaná myofunkční terapeutka.</em>',
      'help_title' : 'Jaké problémy řešíme?' ,
      'help_kids_title' : 'Děti',
      'help_adults_title' : 'Dospělí',
      'help_kids' : [
                      "nevhodné ústní dýchání",
                      "předcházení rovnátkům",
                      "prevence relapsu v ortodontické péči",
                      "flexibilita podjazykové uzdiček",
                      "podpora logopedické terapie",
                      "skřípání zuby (bruxismus)",
                      "špatné držení těla",
                      "zlepšení orálního mikrobiomu",
                      "nižší kazivost chrupu"
                    ] as string[], 
      'help_adults' : [
                       "nevhodné ústní dýchání",
                       "prevence relapsu v ortodontické péči",
                       "bolesti čelistních kloubů, zad a hlavy",
                       "chrápání a spánková apno",
                       "bruxismus, zatínání zubů|",
                       "zlepšení orálního mikrobiomu",
                       "snížení kazivosti chrupu",
                       "zlepšení výslovnosti v cizích jazycích"
                      ] as string[],
      'promise_title' : 'Náš <strong>příslib</strong> Vám',
      'promise_text' : '• Podporu bez odsuzování<br>• Jasné cíle a měřitelný progres<br>• Praktický domácí trénink a kontinuální podporu.'
    },
    about : {
        'description' : 'Myofunkční terapeut a vědec zabívající se řečí působící v Praze a Lublani.'
    },
    contact : {
        'firstN' : 'Jméno',
        'lastN' : 'Příjmení',
        'example_email' : 'jemno@vasemail.cz',
        'phone_number' : "telefonní číslo",
        'YourMessage' : 'Vaše zpráva',
        'Submit' : 'Odeslat',
        'blurb' : 'Kontaktujte Sonomyo pro sjednání termínu nebo jiné dotazy.',
        'oco' : 'Další kontakty:',
        'Phone' : 'Telefon',
        'Address' : 'Adresa',
        'SM' : 'Sociální Média.',
        'SMblurb' : 'Neváhejte nás kontaktovat na kterékoli ze sociálních sítí uvedených ve spodní části stránky.',
        'title' : 'Sonomyo | Kontaktujte nás.',
        'description' : 'Máte dotaz nebo si přejete rezervovat termín? Kontaktujte nás.',
        'header' : 'Kontaktujte <strong>SonoMyo</strong> s dotazy nebo rezervujte termín.',
        'GiT' : 'Kontaktujte nás',
    },
    nav: {
        '/': 'Úvod',
        '/pricing': 'Ceník',
        '/blog': 'Blog',
        '/faq': 'FAQ',
        '/contact': 'Kontakt',
        '/about': 'O mně',
        '/myofunctional-therapy' : 'Myofunkční terapie',
        '/ultrasound-biofeedback' : "Ultrazvukový feedback",
        'Book appointment' : 'Objednat termín',
        '/services' : 'Služby',
    } as Record<string, string>,
    myofunctional_therapy : {
        'title' : 'Orální myofunkční terapie pro děti a dospělý',
        'text' : 'Orální myofunkční terapie (OMT) je šetrný a praktický přístup, který pomáhá regenerovat svaly obličeje, rtů, jazyka a čelisti, aby fungovaly tak, jak mají – podporuje přirozené dýchání, efektivní polykání, jasnější řečové vzorce a klidnější spánek. <br><br> Mnoho lidí je překvapeno, když zjistí, jak moc mohou každodenní návyky a s+valové motorícké vzorce ovlivnit způsob, jakým dýcháme, jíme, rosteme a cítíme se. Náš cíl je jednoduchý: pomoci vám (nebo vašemu dítěti) vybudovat si zdravý tonus a pohybové vzorce jazyka, které vydrží – krok za krokem.',
        'workwith_title' : 'S kým pracujeme',
        'workwith_text' :  'Pracujeme s dětmi i dospělými, kteří se potýkají s:<br><br>• Dýcháním ústy nebo s otevřenými ústy v klidu<br>• Pozicí s nízkým jazykem v klidu<br>• Vystrčeným jazykem<br>• Chrápáním nebo neklidným spánkem (v rámci týmové péče)<br>• Obavami z ortodontické recidivy nebo s podproní terapií během nošení rovnátek/rovnátek<br>• Napětím v čelisti/obličeji souvisejícím s funkcí<br>',
        'offer_title' :  'What we offer',
        'offer_text' : '',
        'offer_1_title' : 'Komplexní myofunkční vyšetření',
        'offer_1_text' : 'Vaše první návštěva je důkladným strukturovaným vyšetřením. Zaměříme se na dýchací vzorce, klidové držení těla v ústech, pohyblivost jazyka, funkci polykání, rovnováhu obličejových svalů a návyky – spolu s anamnézou a cíli. Odejdete s jasnou představou o tom, co vidíme, a s personalizovaným plánem přizpůsobeným vám nebo vašemu dítěti.<br><br>Pokud si všimneme známek, které by naznačovaly jinou oblast podpory, můžeme doporučit koordinovanou péči s ortodontistou, zubním lékařem, ORL specialistou, specialistou spánku, terapeutem fyzioterapie/operatérem nebo jinými poskytovateli péče.',      
        'offer_2_title' : 'Personalizovaný program orální myofunkční terapie',
        'offer_2_text' : 'Terapie je individuální a přizpůsobená potřebám klienta. Sezení zahrnují:<br><br>• Cílená cvičení pro posílení síly, koordinace a vytrvalosti<br>• Podrobný návod na dýchání nosem a zdravé držení těla v klidu<br>• Praktické strategie, které odpovídají reálnému životu (škola, práce, sport, nabitý program)<br>• Domácí cvičení, která jsou jednoduché, proveditelné a srozumitelně vysvětlené<br><br>Terapie probíhá podle programu MFTsTArs a je podporována vizuální zpětnou vazbou prostřednictvím ultrazvukového zobrazování jazyka.<br><br>Zaměřujeme se na pokrok, který můžete cítit a vidět – zlepšení návyků a fungování v každodenním životě, nejen v terapeutické místnosti.<br><br>',
        'offer_3_title' : 'Ortodontická podpora (před, během nebo po léčbě)',
        'offer_3_text' : 'Zdravá svalová funkce hraje velkou roli v dlouhodobém udržení výsledků ortodontické terapie. Orální myofunkční terapie může podpořit ortodontickou terapii rovnátky tím, že pomáhá vytvořit vyvážené držení jazyka a rtů a efektivní polykání – takže výsledky ortodontické terapie přetrvají.',      
        'offer_4_title' : 'Podpora dýchacích cest a spánku (kolaborativní péče)',
        'offer_4_text' : 'Nediagnostikujeme poruchy spánku, ale často pracujeme s rodinami a dospělými, kteří mají problémy, jako je dýchání ústy, chrápání nebo neklidný spánek. V případě potřeby koordinujeme s vaším lékařským týmem, aby váš terapeutický plán podporoval návyky a funkci dýchacích cest.',            
      } as Record<string, string>,
      cta : {
        'title' : 'Jste připravení začít?',
        'text' : 'Pokud vás zajímá, zda by vám nebo vašemu dítěti mohla pomoci orální myofunkční terapie nebo nácvik výslovnosti s ultrazvukovou podporou, rádi se s vámi setkáme. Začněte komplexním vyšetřením a společně podnikneme další kroky.',
        'book' : 'Book appointment',
      },
      ultrasound_imaging :
      {
        'title' : 'Ultrazvukový bio-feedback',
        'text' : 'Ultrazvuk je efektivní nástroj pro učení, protože umožňuje vidět pohyb jazyka v reálném čase. Pro klienty, kteří mají potíže s určitými zvuky, může tato vizuální zpětná vazba konečně pomoci docílit správného umístění jazyka tam, kde tradiční metody selhávají. Tato metoda je obzvláště užitečná, když klient potřebuje jasnější a konkrétnější zpětnou vazbu o tvaru a pohybu jazyka. Metodu lze použít k procvičování výslovnosti v rodném i cizím jazyce a je vhodná pro děti od 5 let a dospělé.',
        'ultra_title' : 'Jak vypadá <strong>cvičení</strong>?',
        'ultra' : 'Během ultrazvukového vyšetření se pod bradu umísti malá ultrazvuková sonda která vizualizuje pohyb jazyka na monitoru na který se klient dívá. Tyto informace používáme k nácviku přesnějšího umístění jazyka a k budování konzistentních phybových vzorců v průběhu terapie. <br><br>(Jedná se o školení a koučování – nikoli o lékařskou diagnózu.)',
        'collaboration_title' : 'Rádi <strong>spolupracujeme</strong>!',
        'collaboration' :  'Pokud v současné době spolupracujete s logopedem, rádi s vámi budeme spolupracovat, aby vaše cíle zůstaly sladěny.',
      },
      blog : {
          'title': '<strong>SonoMyo</strong> Blog',
          'text': 'Zůstaňte informovány. Všechny nejnovější informace ze světa myofunkční terapie a logopedie.'
      }
  },
  en: {
    index : {
      'topblurb' : 'Ultrasound bio-feedback aided myofunctional therapy',
      'book' : 'Book appointment',
      'about_title' : '<strong>SonoMyo</strong>: tongue in the right place',
      'about_text' : 'Many people are surprised to learn how much everyday habits and muscle patterns of mouth and tongue can affect the way we breathe, eat, grow, and feel. Our goal is simple: help you (or your child) build healthy mouth and tongue muscle habits that last—one step at a time, with plenty of encouragement along the way.',
      'remote_consultation_title' : 'Online consultation',
      'remote_consultation_text' : 'You aren\'t sure if the therapy is for you? Or you would like an advise? We can consult without the need of in person visit.',
      'inperson_consultation_title' : 'In person',
      'inperson_consultation_text' : 'Come to our practice.',
      'difference_title' : 'How are we <strong>different</strong>?',
      'difference_text' : '<strong>SonoMyo</strong> is the first and only practice in the Czech Republic utilising <strong>ultrasound biofeedback</strong> to guide therapy, speeding it up and increasing its effectiveness. <br><br> Ultrasound lets you <strong>see your tongue move in real time</strong>, so you don’t have to guess whether you’re doing an exercise correctly. This visual feedback helps patterns “click” faster—supporting <strong>better tongue posture, breathing habits, swallowing, and clear speech </strong>. <br><br> Ultrasound is gentle, safe, and non-invasive: a small probe rests under the chin while we coach you step-by-step. <br><br> I have 20 year experience in researching ultrasound guided bio-feedback in speech therapy and articulation training, having shown its efficacy in multiple studies. With SonoMio I am bringing this cutting edge therapy approach to you. <br><br> <strong>MSc. Tanja Kocjančič Antolík, PhD</strong> <br> <em>Speech scientists and certified myofunctional therapist.</em>',
      'help_title' : 'Which problems do we address?' ,
      'help_kids_title' : 'Children',
      'help_adults_title' : 'Adults',
      'help_kids' : [
                      "mouth breathing",
                      "prevention of braces",
                      "prevention of relapse in orthodontic care",
                      "flexibility of sublingual frenulum",
                      "support of speech therapy",
                      "teeth grinding (bruxism)",
                      "poor posture",
                      "improvement of oral microbiome",
                      "lower dental caries"
                    ] as string[],
      'help_adults' : [
                        "mouth breathing",
                        "prevention of relapse in orthodontic care",
                        "jaw joint, back and headache pain",
                        "snoring and sleep apnea",
                        "bruxism, teeth clenching",
                        "improvement of oral microbiome",
                        "reduction of dental caries",
                        "improvement of pronunciation in foreign languages"
                      ] as string[],
      'promise_title' : 'Our <strong>pormise</strong>',
      'promise_text' : '• A supportive, judgment-free environment<br>• Clear goals and measurable progress<br>• Practical home practice with coaching and accountability'

    },
    about : {
        'description' :'Myofunctional therapist and speech scientists based in Prague and Ljubljana.'
    },
    contact : {
        'firstN' : 'First Name',
        'lastN' : 'Last Name',
        'example_email' : 'name@youremail.com',
        'phone_number' : "phone number",
        'YourMessage' : 'Your Message',
        'Submit' : 'Submit',
        'blurb' : 'Contact Sonomyo for appointments or other inquiries.',
        'oco' : 'Other contact options:',
        'Phone' : 'Phone',
        'Address' : 'Address',
        'SM' : 'Social Media.',
        'SMblurb' : "Feel free to contact us on any of the social media at the bottom of the page.\n\n",
        'title' : 'Sonomyo | Get in Touch.',
        'description' : 		'Have questions or want to schedule an appointment? Contact Sonomyo today.',
        'header' : 'Contact <strong>SonoMyo</strong> for appointments or other inquiries.',
        'GiT' : 'Get in Touch',
        },
    nav : {
        '/': 'Home',
        '/pricing': 'Pricing',
        '/blog': 'Blog',
        '/faq': 'FAQ',
        '/contact': 'Contact',
        '/about': 'About',
        '/myofunctional-therapy' : 'Myofunctional Therapy',
        '/ultrasound-biofeedback' : "Ultrasound Feedback",
        '/services' : 'Services',
        'Book appointment': 'Book appointment',
    } as Record<string, string>,
    myofunctional_therapy : {
        'title' : 'Oral Myofunctional Therapy for children and adults',
        'text' : 'Oral Myofunctional Therapy (OMT) is a gentle, practical approach that helps retrain the muscles of the face, lips, tongue, and jaw so they work the way they’re meant to—supporting comfortable breathing, effective swallowing, clearer speech patterns, and more restful sleep. <br><br> Many people are surprised to learn how much everyday habits and muscle patterns can affect the way we breathe, eat, grow, and feel. Our goal is simple: help you (or your child) build healthy patterns that last—one step at a time, with plenty of encouragement along the way.',
         'workwith_title' : 'Who we work with',
         'workwith_text' :  'We see kids and adults who may be dealing with:<br><br>• Mouth breathing or open-mouth posture<br>• Low tongue resting posture<br>• Tongue thrust<br>• Snoring or restless sleep concerns (as part of a collaborative care team)<br>• Orthodontic relapse concerns or support during braces/aligners<br>• Tension in the jaw/face related to function<br>',
         'offer_title' :  'What we offer',
         'offer_text' : '',
         'offer_1_title' : 'Comprehensive Myofunctional Evaluation',
         'offer_1_text' : 'Your first visit is a thorough, welcoming assessment. We look at breathing patterns, oral rest posture, tongue mobility, swallow function, facial muscle balance, and habits—along with health history and goals. You’ll leave with a clear understanding of what we’re seeing and a personalized plan tailored to you or your child.<br><br>If we notice signs that point to another area of support, we may recommend coordinated care with an orthodontist, dentist, ENT, sleep physician, SLP, PT/OT, or other providers.',      
         'offer_2_title' : 'Personalized Oral Myofunctional Therapy Program',
         'offer_2_text' : 'Therapy is one-on-one and customized. Sessions include:<br><br>• Targeted exercises to build strength, coordination, and endurance<br>• Step-by-step coaching for nasal breathing and healthy oral rest posture<br>• Practical strategies that fit real life (school, work, sports, busy schedules)<br>• Home practice that’s simple, doable, and clearly explained<br><br>Therapy follows the MFTsTArs program and is supported by visual feedback via ultrasound tongue imaging.<br><br>We focus on progress you can feel and see—improving habits and function in daily life, not just in the therapy room.<br><br><br>',
         'offer_3_title' : 'Orthodontic Support (Before, During, or After Treatment)',
         'offer_3_text' : 'Healthy muscle function plays a big role in long-term results of orthodontic treatment. Oral myofunctional therapy can support orthodontic therapy with braces or aligners by helping create balanced tongue and lip posture and an efficient swallow—so orthodontic results are more likely to hold.',      
         'offer_4_title' : 'Airway & Sleep Support (Collaborative Care)',
         'offer_4_text' : 'We don’t diagnose sleep disorders, but we often work with families and adults who have concerns like mouth breathing, snoring, or restless sleep. When appropriate, we coordinate with your medical team so your therapy plan supports airway-friendly habits and function.',            
        } as Record<string, string>,
      cta : {
        'title' : 'Ready to begin?',
        'text' : 'If you’re curious whether Oral Myofunctional Therapy or ultrasound-supported pronunciation practice could help you or your child, we’d love to meet you. Start with a comprehensive evaluation and we’ll take the next steps together.',
        'book' : 'Book appointment',

      },
      ultrasound_imaging :
      {
        'title' : 'Ultrasound imaging bio-feedback',
        'text' : 'Ultrasound is a effective learning tool, because it lets you see the tongue move in real time. For clients who struggle with certain sounds, this visual feedback can make tongue placement finally “click.” This service is especially helpful when a client needs clearer, more specific feedback about tongue shape and movement. The method can be used for practicing pronunciation in a native or foreign language, and is suitable for children from the age of 5 years and adults.',
        'ultra_title' : 'How does a <strong>traing session</strong> look?',
        'ultra' : 'During an ultrasound session, a small ultrasound probe is held under the chin to visualize tongue movement. We use this information to coach more accurate tongue placement and help build consistent patterns over time. <br><br> (This is training and coaching—not a medical diagnosis.)',
        'collaboration_title' : '<strong>Collaborative</strong> approach',        
        'collaboration' : 'If you are currently working with a  Orthodontist or Speech-Language Pathologis, we’re happy to collaborate so your treatment goals stay aligned.',
      },
      blog : {
          'title': 'The <strong>SonoMyo</strong> Blog.',
          'text': 'Stay informed. All the latest from the world of myofunctional therapy and speech science.'
      }

  },
} as const;

export type Lang = keyof typeof ui;