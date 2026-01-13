import React, { useState, useMemo } from 'react';

const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);


const data = [
  // Venture Studios
  { name: "Gravity Labs", category: "Venture Studio", url: "https://gravity-labs.xyz/", location: "Brooklyn, NY", leaders: [{ name: "Kyle Libra", linkedin: "https://www.linkedin.com/in/kylelibra/", twitter: "https://x.com/kylelibra" }] },
  { name: "Dlab", category: "Venture Studio", url: "https://dlab.vc/", location: "Boston, MA", leaders: [{ name: "Shawn Broderick", linkedin: "https://www.linkedin.com/in/shawnbroderick/", twitter: "https://x.com/sbroderick" }] },
  { name: "SuperLayer", category: "Venture Studio", url: "https://superlayer.io/", location: "San Francisco, CA", leaders: [{ name: "Renee Wong", linkedin: "https://www.linkedin.com/in/renee-wong-340ba91/", twitter: null }] },
  { name: "Draper Goren Blockchain", category: "Venture Studio", url: "https://www.dgb.vc/", location: "Troy, MI", leaders: [{ name: "Tim Draper", linkedin: "https://www.linkedin.com/in/timothydraper/", twitter: "https://x.com/TimDraper" }] },
  { name: "Thesis", category: "Venture Studio", url: "https://thesis.co/", location: "San Mateo, CA", leaders: [{ name: "Matt Luongo", linkedin: "https://www.linkedin.com/in/mattluongo/", twitter: "https://x.com/mhluongo" }] },
  { name: "ConsenSys Mesh", category: "Venture Studio", url: "https://www.mesh.xyz/", location: "Washington, DC", leaders: [{ name: "Joseph Lubin", linkedin: "https://www.linkedin.com/in/joseph-lubin-48406489/", twitter: "https://x.com/ethereumJoseph" }] },
  { name: "BDE Ventures", category: "Venture Studio", url: "https://bde.io/", location: "Singapore", leaders: [{ name: "Brian D. Evans", linkedin: "https://www.linkedin.com/in/briandevansla/", twitter: "https://x.com/BrianDEvans" }] },
  { name: "Kreatorverse", category: "Venture Studio", url: "https://kreatorverse.com/", location: "Bengaluru, India", leaders: [{ name: "Yuvaraj Thanikachalam", linkedin: "https://www.linkedin.com/in/yuvarajthanikachalam/", twitter: "https://x.com/YuvarajT" }] },
  { name: "Moonsonglabs", category: "Venture Studio", url: "https://moonsonglabs.com/", location: "Burlington, MA", leaders: [{ name: "Derek Yoo", linkedin: "https://www.linkedin.com/in/derek-yoo-8a050/", twitter: "https://x.com/derekyoo" }] },
  { name: "Protofire", category: "Venture Studio", url: "https://protofire.io/", location: "San Juan, Puerto Rico", leaders: [{ name: "Renat Khasanshyn", linkedin: "https://www.linkedin.com/in/renatco/", twitter: "https://x.com/renatco" }] },
  { name: "Blockchain Laboratories", category: "Venture Studio", url: "https://blockchainlaboratories.com/", location: "Sheridan, WY", leaders: [{ name: "Boone Bergsma", linkedin: "https://www.linkedin.com/in/boonebergsma/", twitter: "https://x.com/BooneBergsma" }] },
  { name: "Highline Beta", category: "Venture Studio", url: "https://www.highlinebeta.com/", location: "Toronto, Canada", leaders: [{ name: "Marcus Daniels", linkedin: "https://www.linkedin.com/in/marcusdaniels/", twitter: "https://x.com/marcusdaniels" }] },
  { name: "X Wave Labs", category: "Venture Studio", url: "https://xwavelabs.io/", location: "Remote", leaders: [] },
  { name: "NPC Group", category: "Venture Studio", url: "https://npcgroup.xyz/", location: "Remote", leaders: [{ name: "Omkar Daud", linkedin: "https://www.linkedin.com/in/omkardaud/", twitter: "https://x.com/OmkarDaud" }] },
  { name: "Holdex", category: "Venture Studio", url: "https://holdex.io/", location: "Hong Kong", leaders: [{ name: "Vadim Zolotokrylin", linkedin: "http://linkedin.com/in/zolotokrylin/", twitter: "https://x.com/zolotokrylin" }] },

  // Accelerators
  { name: "The Blox", category: "Accelerator", url: "https://theblox.co/", location: "Toronto, Canada", leaders: [{ name: "Ben Constanty", linkedin: "https://www.linkedin.com/in/ben-constanty/", twitter: "https://x.com/benconstanty" }] },
  { name: "Borderless Capital", category: "Accelerator", url: "https://borderlesscapital.io/", location: "Atlanta, GA", leaders: [{ name: "David Garcia", linkedin: "https://www.linkedin.com/in/dglnkd/", twitter: null }] },

  // Venture Capital
  { name: "Defy", category: "VC", url: "https://defy.vc/", location: "Woodside, CA", leaders: [{ name: "Brian Rothenberg", linkedin: "https://www.linkedin.com/in/brianrothenberg/", twitter: "https://x.com/bmrothenberg" }] },
  { name: "Dragonfly", category: "VC", url: "https://www.dragonfly.xyz/", location: "Oakland, CA", leaders: [{ name: "Haseeb Qureshi", linkedin: "https://www.linkedin.com/in/april-li-b06a29259/", twitter: "https://x.com/hosseeb" }] },
  { name: "a16z Crypto", category: "VC", url: "https://a16zcrypto.com/", location: "Menlo Park, CA", leaders: [{ name: "Chris Dixon", linkedin: "https://www.linkedin.com/in/chris-dixon-9599b127b/", twitter: "https://x.com/cdixon" }] },
  { name: "Coinbase Ventures", category: "VC", url: "https://www.coinbase.com/ventures", location: "Oakland, CA", leaders: [{ name: "Hoolie Tejwani", linkedin: "https://www.linkedin.com/in/hoolietejwani/", twitter: "https://x.com/HoolieG" }] },
  { name: "Pantera", category: "VC", url: "https://panteracapital.com/", location: "Menlo Park, CA", leaders: [{ name: "Dan Morehead", linkedin: "https://www.linkedin.com/in/dmorehead/", twitter: "https://x.com/dan_pantera" }] },
  { name: "Founders Fund", category: "VC", url: "https://foundersfund.com/", location: "San Francisco, CA", leaders: [{ name: "Neil Ruthven", linkedin: "https://www.linkedin.com/in/neil-ruthven-b7a6121/", twitter: null }] },
  { name: "Jump Crypto", category: "VC", url: "https://jumpcrypto.com/", location: "Chicago, IL", leaders: [{ name: "Saurabh Sharma", linkedin: "https://www.linkedin.com/in/zsparta/", twitter: "https://x.com/zsparta" }] },
  { name: "Multicoin Capital", category: "VC", url: "https://multicoin.capital/", location: "Austin, TX", leaders: [{ name: "Kyle Samani", linkedin: "https://www.linkedin.com/in/kylesamani/", twitter: "https://x.com/KyleSamani" }] },
  { name: "Solana Ventures", category: "VC", url: "https://solana.ventures/", location: "San Francisco, CA", leaders: [{ name: "Matthew Beck", linkedin: "https://www.linkedin.com/in/matthewlsbeck/", twitter: "https://x.com/matthewabeck1" }] },
  { name: "Paradigm", category: "VC", url: "https://www.paradigm.xyz/", location: "San Francisco, CA", leaders: [{ name: "Matthew Huang", linkedin: "https://www.linkedin.com/in/kmhuang/", twitter: "https://x.com/matthuang" }] },
  { name: "Polychain Capital", category: "VC", url: "https://polychain.capital/", location: "San Francisco, CA", leaders: [{ name: "Olaf Carlson-Wee", linkedin: "https://www.linkedin.com/in/olaf-carlson-wee-b9796662/", twitter: "https://x.com/zxocw" }] },
  { name: "Defiance Capital", category: "VC", url: "https://defiance.capital/", location: "Singapore", leaders: [{ name: "Arthur Cheong", linkedin: "https://www.linkedin.com/in/arthur-cheong-8270a25b/", twitter: "https://x.com/Arthur_0x" }] },
  { name: "Mechanism Capital", category: "VC", url: "https://www.mechanism.capital/", location: "Liberty Hill, TX", leaders: [{ name: "Marc Weinstein", linkedin: "https://www.linkedin.com/in/marc-weinstein-look-up/", twitter: "https://x.com/WarcMeinstein" }] },
  { name: "The Spartan Group", category: "VC", url: "https://www.spartangroup.io/", location: "Singapore", leaders: [{ name: "Melody He", linkedin: "https://www.linkedin.com/in/melody-he-497a5b25/", twitter: "https://x.com/melmelmelting" }] },
  { name: "Tribe Capital", category: "VC", url: "https://www.crypto.tribecap.co/", location: "Menlo Park, CA", leaders: [{ name: "Arjun Sethi", linkedin: "https://www.linkedin.com/in/asethi/", twitter: "https://x.com/arjunsethi" }] },
  { name: "Founders Inc", category: "VC", url: "https://f.inc/", location: "San Francisco, CA", leaders: [{ name: "Hubert Thieblot", linkedin: "https://www.linkedin.com/in/hubertthieblot/", twitter: "https://x.com/hthieblot" }] },
  { name: "South Park Commons", category: "VC", url: "https://www.southparkcommons.com/", location: "San Francisco, CA", leaders: [{ name: "Aditya Agarwal", linkedin: "https://www.linkedin.com/in/aditya-agarwal-1550841/", twitter: "https://x.com/adityaag" }] },
  { name: "Chapter One", category: "VC", url: "https://chapterone.com/", location: "Los Angeles, CA", leaders: [{ name: "Jeffrey Morris Jr.", linkedin: "https://www.linkedin.com/in/jeffmorrisjr/", twitter: "https://x.com/jmj" }] },
  { name: "P2 Ventures", category: "VC", url: "https://www.p2v.ventures/", location: "British Virgin Islands", leaders: [{ name: "Yvette Tao", linkedin: "https://www.linkedin.com/in/yvettetkh/", twitter: null }] },
  { name: "M1 Capital", category: "VC", url: "https://m1-capital.com/", location: "Amsterdam, Netherlands", leaders: [{ name: "David van Goudoever", linkedin: "https://www.linkedin.com/in/david-van-goudoever-297096b1/", twitter: "https://x.com/DGoudoever" }] },
  { name: "Outlier Ventures", category: "VC", url: "https://outlierventures.io/", location: "London, UK", leaders: [{ name: "Aron Van Ammers", linkedin: "https://www.linkedin.com/in/aronvanammers/", twitter: "https://x.com/aronvanammers" }] },
  { name: "Blizzard Fund", category: "VC", url: "https://www.blizzard.fund/", location: "New York, NY", leaders: [{ name: "Vera Im", linkedin: "https://www.linkedin.com/in/vera-im/", twitter: "https://x.com/veritaim" }] },
  { name: "Foundation Capital", category: "VC", url: "https://foundationcapital.com/", location: "Palo Alto, CA", leaders: [{ name: "David Armstrong JD", linkedin: "https://www.linkedin.com/in/david-armstrong-aaab0514/", twitter: null }] },
  { name: "Verda Ventures", category: "VC", url: "https://verda.ventures/", location: "Incline Village, NV", leaders: [{ name: "Alex Witt", linkedin: "https://www.linkedin.com/in/alexwitt/", twitter: "https://x.com/AlexLWitt" }] },
  { name: "Digital Currency Group", category: "VC", url: "https://dcg.co/", location: "Stamford, CT", leaders: [{ name: "Jason Yacavone", linkedin: "https://www.linkedin.com/in/jason-y-8255a411/", twitter: null }] },
  { name: "Mirana Ventures", category: "VC", url: "https://www.mirana.xyz/", location: "British Virgin Islands", leaders: [{ name: "Zixi Wang", linkedin: null, twitter: null }] },
  { name: "Animoca Brands", category: "VC", url: "https://www.animocabrands.com/", location: "Hong Kong", leaders: [{ name: "Robby Yung", linkedin: "https://www.linkedin.com/in/robyung/", twitter: "https://x.com/viewfromhk" }] },
  { name: "YZi Labs", category: "VC", url: "https://www.yzilabs.com/", location: "Hong Kong", leaders: [{ name: "Alex Odagiu", linkedin: "https://www.linkedin.com/in/odagiu/", twitter: "https://x.com/odagius" }] },
  { name: "Robot Ventures", category: "VC", url: "https://robvc.com/", location: "New York, NY", leaders: [{ name: "Robert Leshner", linkedin: "https://linkedin.com/in/rleshner/", twitter: "https://x.com/rleshner" }] },
  { name: "Hashkey Capital", category: "VC", url: "https://hashkey.capital/", location: "Singapore", leaders: [{ name: "Ryan Chen", linkedin: "https://www.linkedin.com/in/ryan-chen-313a20273/", twitter: null }] },
  { name: "MH Ventures", category: "VC", url: "https://www.mhventures.io/", location: "Cayman Islands", leaders: [{ name: "Kamran Iqbal", linkedin: null, twitter: "https://x.com/0xKDOT" }] },
  { name: "Hashed", category: "VC", url: "https://www.hashed.com/", location: "Seoul, South Korea", leaders: [{ name: "Seojoon Kim", linkedin: "https://www.linkedin.com/in/seojoonkim/", twitter: "https://x.com/simonkim_nft" }] },
  { name: "Sora Ventures", category: "VC", url: "https://sora.vc/", location: "Taipei, Taiwan", leaders: [{ name: "Jason Fang", linkedin: "https://www.linkedin.com/in/jason-fang-7801b2101/", twitter: "https://x.com/JasonSoraVC" }] },
  { name: "New Form Capital", category: "VC", url: "https://www.newformcap.com/", location: "New York, NY", leaders: [{ name: "Alex Marinier", linkedin: "https://www.linkedin.com/in/alex-marinier-003a1954/", twitter: null }] },
  { name: "3cubed VC", category: "VC", url: "https://www.3cubed.vc/", location: "San Francisco, CA", leaders: [{ name: "Marco Buhlmann", linkedin: "https://www.linkedin.com/in/marcobuhlmann/", twitter: "https://x.com/MBuhlmann" }] },
  { name: "Nascent", category: "VC", url: "https://www.nascent.xyz/", location: "Montreal, Canada", leaders: [{ name: "Dan Elitzer", linkedin: "https://www.linkedin.com/in/delitzer/", twitter: "https://x.com/delitzer" }] },
  { name: "Delta Blockchain Fund", category: "VC", url: "https://deltafund.io/", location: "New York, NY", leaders: [{ name: "Kavita Gupta", linkedin: "https://www.linkedin.com/in/kavita-gupta-71a4352/", twitter: "https://x.com/KavitaGupta19" }] },
  { name: "Streamlined Ventures", category: "VC", url: "https://www.streamlined.vc/", location: "Palo Alto, CA", leaders: [{ name: "Ullas Naik", linkedin: "https://www.linkedin.com/in/ullasnaik/", twitter: "https://x.com/ullastweets" }] },
  { name: "Nibiru Ventures", category: "VC", url: "https://nibiru.fi/venture", location: "Palo Alto, CA", leaders: [{ name: "Unique Divine", linkedin: "https://www.linkedin.com/in/unique-divine/", twitter: "https://x.com/UniqueDivine" }] },
  { name: "Tensor Ventures", category: "VC", url: "https://tensor.ventures/", location: "Luxembourg", leaders: [{ name: "Martin Drdul", linkedin: "https://www.linkedin.com/in/martindrdul/", twitter: "https://x.com/mdrdul" }] },
  { name: "Cyber.Fund", category: "VC", url: "https://cyber.fund/", location: "Cayman Islands", leaders: [{ name: "Vasiliy Shapovalov", linkedin: "https://www.linkedin.com/in/vasiliy-shapovalov-91716491/", twitter: "https://x.com/_vshapovalov" }] },
  { name: "Signum Capital", category: "VC", url: "https://www.signum.capital/", location: "Singapore", leaders: [{ name: "John Pangilinan Ng", linkedin: "https://www.linkedin.com/in/johnngp/", twitter: "https://x.com/john_ng_p" }] },
  { name: "Two Hop Ventures", category: "VC", url: "https://twohop.ventures/", location: "Amsterdam, Netherlands", leaders: [{ name: "Alexander Louis Fauvel", linkedin: "https://www.linkedin.com/in/alexfauvel/", twitter: null }] },
  { name: "Reciprocal Ventures", category: "VC", url: "https://recvc.com/", location: "New York, NY", leaders: [{ name: "Craig Burel", linkedin: "https://www.linkedin.com/in/craigburel/", twitter: "https://x.com/CraigBurel" }] },
  { name: "Kosmos Ventures", category: "VC", url: "https://www.kosmos.vc/", location: "Perth, Australia", leaders: [{ name: "Sheridan Hammond", linkedin: "https://www.linkedin.com/in/sheridanhammond/", twitter: "https://x.com/sheridanhammond" }] },
  { name: "UDHC", category: "VC", url: "https://www.udhc.com/", location: "Sheridan, CA", leaders: [{ name: "Steven Becker", linkedin: "https://www.linkedin.com/in/steven-becker/", twitter: "https://x.com/altSdbecker" }] },
  { name: "Graph Ventures", category: "VC", url: "https://www.graphventures.com/", location: "San Francisco, CA", leaders: [{ name: "Matthew Wyndowe", linkedin: "https://www.linkedin.com/in/wyndowe/", twitter: "https://x.com/mattwyndowe" }] },
  { name: "Youbi Capital", category: "VC", url: "https://youbicapital.com/", location: "Cayman Islands", leaders: [{ name: "Li Gong", linkedin: "https://www.linkedin.com/in/li-gong-77614a7/", twitter: null }] },
  { name: "RockawayX", category: "VC", url: "https://rockawayx.com/", location: "Prague, Czech Republic", leaders: [{ name: "Viktor Fischer", linkedin: "https://www.linkedin.com/in/viktorfischer/", twitter: "https://x.com/viktorfischer" }] },
  { name: "LeadBlock Partners", category: "VC", url: "https://leadblockpartners.com/", location: "London, UK", leaders: [{ name: "David Chreng", linkedin: "https://www.linkedin.com/in/dcm07/", twitter: null }] },
  { name: "Inception Capital", category: "VC", url: "https://www.inception.capital/", location: "British Virgin Islands", leaders: [{ name: "David Gan", linkedin: "https://www.linkedin.com/in/davidgancheng/", twitter: "https://x.com/davidgan1818" }] },
  { name: "Amino Capital", category: "VC", url: "https://www.aminocapital.com/", location: "Palo Alto, CA", leaders: [{ name: "Qiang Li", linkedin: "http://linkedin.com/in/larryli/", twitter: null }] },
  { name: "Foresight Ventures", category: "VC", url: "https://www.foresightventures.com/", location: "Singapore", leaders: [{ name: "Forest Bai", linkedin: "http://linkedin.com/in/forest-bai-63154110a/", twitter: "https://x.com/ForestBai1" }] },
  { name: "ArkStream Capital", category: "VC", url: "https://www.arkstream.capital/", location: "Singapore", leaders: [{ name: "Warren Fang", linkedin: "https://www.linkedin.com/in/warren-fang-ba5344152/", twitter: null }] },
  { name: "1kx", category: "VC", url: "https://1kx.network/", location: "New York, NY", leaders: [{ name: "Lasse Clausen", linkedin: "https://www.linkedin.com/in/lasseclausen/", twitter: "https://x.com/lalleclausen" }] },
  { name: "Bloccelerate", category: "VC", url: "https://bloccelerate.vc/", location: "Seattle, WA", leaders: [{ name: "Kate Laurence", linkedin: "https://www.linkedin.com/in/kate-mitselmakher/", twitter: "https://x.com/K_Laurence_" }] },
  { name: "Maven 11", category: "VC", url: "https://www.maven11.com/", location: "Amsterdam, Netherlands", leaders: [{ name: "Balder Bomans", linkedin: "https://www.linkedin.com/in/balder-bomans-85a2b331/", twitter: "https://x.com/BalderBomans" }] },
  { name: "Njordis Ventures", category: "VC", url: "https://njordis.com/", location: "Oslo, Norway", leaders: [{ name: "Robin Weninger", linkedin: "https://www.linkedin.com/in/robinweninger/", twitter: null }] },
  { name: "X Ventures", category: "VC", url: "https://www.xventures.de/", location: "Monheim, Germany", leaders: [{ name: "Zohair Dehnadi", linkedin: "https://www.linkedin.com/in/zdehnadi/", twitter: "https://x.com/pathofz" }] },
  { name: "Arcanum Capital", category: "VC", url: "https://www.arcanum.capital/", location: "Hamilton, Bermuda", leaders: [{ name: "James McDowall", linkedin: "https://www.linkedin.com/in/james-mcdowall/", twitter: null }] },
  { name: "EV3", category: "VC", url: "https://ev3.xyz/", location: "New York, NY", leaders: [{ name: "Mahesh Ramakrishnan", linkedin: "https://www.linkedin.com/in/mahesh-ramakrishnan-62b39a76/", twitter: "https://x.com/MoneroMahesh" }] },
  { name: "Arcanum Ventures", category: "VC", url: "https://www.arcanum.ventures/", location: "Panama City, Panama", leaders: [{ name: "Carmelo Giuliano", linkedin: "https://www.linkedin.com/in/carmelo-giuliano-3866a81b3/", twitter: "https://x.com/MELOWILD" }] },
  { name: "CitizenX", category: "VC", url: "https://www.citizenx.co/", location: "New York, NY", leaders: [{ name: "Emilio DiSanluciano", linkedin: null, twitter: "https://x.com/edisanluciano" }] },
  { name: "Primitive Ventures", category: "VC", url: "https://primitive.ventures/", location: "San Francisco, CA", leaders: [{ name: "Dovey Wan", linkedin: "https://www.linkedin.com/in/doveywan/", twitter: "https://x.com/DoveyWan" }] },
  { name: "Fulgur Ventures", category: "VC", url: "https://fulgur.ventures/", location: "Wilmington, DE", leaders: [{ name: "Oleg Michalski", linkedin: "https://www.linkedin.com/in/olegmikh/", twitter: null }] },
  { name: "Protofund", category: "VC", url: "https://www.protofund.com/", location: "Los Angeles, CA", leaders: [{ name: "Jonathan Chu", linkedin: "https://www.linkedin.com/in/jonathanwchu/", twitter: "https://x.com/jonathanwchu" }] },
  { name: "XVC Tech", category: "VC", url: "https://www.xvc.tech/", location: "Dubai, UAE", leaders: [{ name: "Johan Lundberg", linkedin: "https://www.linkedin.com/in/johan-lundberg-a3620b4/", twitter: "https://x.com/TechXvc" }] },
  { name: "Contango Digital Assets", category: "VC", url: "https://www.contango.digital/", location: "British Virgin Islands", leaders: [{ name: "Joshua Field", linkedin: "http://linkedin.com/in/joshuafieldcontango/", twitter: "https://x.com/contangojosh" }] },
  { name: "The Fintech Fund", category: "VC", url: "https://www.thefintechfund.com/", location: "New York, NY", leaders: [{ name: "Nik Milanovic", linkedin: "https://www.linkedin.com/in/nikm/", twitter: "https://x.com/NikMilanovic" }] },
  { name: "Matrix Capital", category: "VC", url: "https://matrix.capital/", location: "Limassol, Cyprus", leaders: [{ name: "Dmitry Alpatkin", linkedin: "https://www.linkedin.com/in/dmitry-alpatkin-43474223/", twitter: null }] },
  { name: "Woodstock Fund", category: "VC", url: "https://woodstockfund.com/", location: "Cayman Islands", leaders: [{ name: "Pranav Sharma", linkedin: "https://www.linkedin.com/in/pranav-sharma-7a05b13/", twitter: "https://x.com/pransharma" }] },
  { name: "BitRock Capital", category: "VC", url: "http://www.bitrockpartners.com/", location: "Singapore", leaders: [{ name: "Alfred Shang Ph.D", linkedin: "https://www.linkedin.com/in/alfred-shang-69b77771/", twitter: null }] },
  { name: "Outpost Capital", category: "VC", url: "https://www.outpostvc.com/", location: "San Francisco, CA", leaders: [{ name: "Ryan Wang", linkedin: "https://www.linkedin.com/in/ryanwangglobal/", twitter: "https://x.com/ryanwangny" }] },
  { name: "Archetype Fund", category: "VC", url: "https://www.archetype.fund/", location: "New York, NY", leaders: [{ name: "Ash Egan", linkedin: "https://www.linkedin.com/in/aaegan/", twitter: "https://x.com/AshAEgan" }] },
];

export default function MarketMap() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'VC', 'Venture Studio', 'Accelerator'];

  const filtered = useMemo(() => {
    return data.filter(item => {
      const leaderNames = item.leaders.map(l => l.name.toLowerCase()).join(' ');
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                           item.location.toLowerCase().includes(search.toLowerCase()) ||
                           leaderNames.includes(search.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [search, categoryFilter]);

  const stats = useMemo(() => ({
    total: filtered.length,
    vcs: filtered.filter(i => i.category === 'VC').length,
    studios: filtered.filter(i => i.category === 'Venture Studio').length,
    accelerators: filtered.filter(i => i.category === 'Accelerator').length,
  }), [filtered]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-light tracking-tight text-gray-900">
                Crypto Venture Landscape
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                {data.length} funds, studios, and accelerators in web3
              </p>
            </div>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Unlock 174 Personal Investor Emails
            </a>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-6">
            {/* Search */}
            <div className="flex-1 min-w-64">
              <input
                type="text"
                placeholder="Search by name, location, or leader..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-0 py-2 text-sm bg-transparent border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 text-xs rounded-full transition-all ${
                    categoryFilter === cat
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <span>{stats.total} results</span>
            <span className="text-gray-200">|</span>
            <span>{stats.vcs} VCs</span>
            <span>{stats.studios} venture studios</span>
            <span>{stats.accelerators} accelerators</span>
          </div>
        </div>
      </div>

      {/* List */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Column Headers */}
        <div className="flex items-center justify-between gap-4 -mx-4 px-4 pb-3 border-b border-gray-200 mb-2">
          <div className="flex items-baseline gap-3 min-w-0 w-48 shrink-0">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Name</span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Primary Contact</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide w-36 text-right">Location</span>
            <span className="w-3"></span>
          </div>
        </div>

        <div className="space-y-0">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="group py-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors -mx-4 px-4"
            >
              <div className="flex items-center justify-between gap-4">
                {/* Left: Name + Category */}
                <div className="flex items-baseline gap-3 min-w-0 w-48 shrink-0">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors truncate"
                  >
                    {item.name}
                  </a>
                  <span className="text-xs text-gray-300 shrink-0">
                    {item.category}
                  </span>
                </div>

                {/* Center: Leadership */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {item.leaders.length > 0 ? item.leaders.slice(0, 2).map((leader, lidx) => (
                    <div key={lidx} className="flex items-center gap-2 min-w-0">
                      <span className="text-sm text-gray-600 truncate">
                        {leader.name}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {leader.linkedin && (
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <LinkedInIcon />
                          </a>
                        )}
                        {leader.twitter && (
                          <a
                            href={leader.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-gray-900 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <TwitterIcon />
                          </a>
                        )}
                      </div>
                      {lidx < Math.min(item.leaders.length, 2) - 1 && (
                        <span className="text-gray-200 mx-1">·</span>
                      )}
                    </div>
                  )) : (
                    <span className="text-xs text-gray-300">—</span>
                  )}
                </div>

                {/* Right: Location + Arrow */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs text-gray-400 w-36 text-right">
                    {item.location}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-500 transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-gray-400">No programs match your filters</p>
          </div>
        )}
      </main>

      {/* SEO Explainer Section */}
      <section className="border-t border-gray-100 bg-gray-50/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              The Comprehensive Crypto Venture Capital Database
            </h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Welcome to the most comprehensive directory of crypto venture capital firms, blockchain accelerators, and web3 venture studios. Whether you're a founder seeking funding for your next DeFi protocol, NFT marketplace, or blockchain infrastructure project, this curated database helps you identify the right investors for your stage and sector.
              </p>
              <p>
                Our database includes over 250 active crypto investors spanning seed-stage venture capital funds, growth equity firms, corporate venture arms, and specialized web3 accelerator programs. Each listing includes verified contact information, leadership details with LinkedIn and Twitter profiles, and geographic location to help you target investors in your region or timezone.
              </p>
              <p>
                The crypto venture landscape has evolved significantly since Bitcoin's inception. Today's web3 investors specialize across multiple verticals including decentralized finance (DeFi), non-fungible tokens (NFTs), layer 1 and layer 2 blockchain protocols, decentralized autonomous organizations (DAOs), blockchain gaming and metaverse projects, real-world asset tokenization (RWA), decentralized physical infrastructure networks (DePIN), and artificial intelligence intersecting with crypto.
              </p>
              <p>
                Venture studios listed in this directory take a hands-on approach to company building, often co-founding startups alongside technical entrepreneurs and providing operational support beyond capital. Accelerator programs offer structured 3-6 month programs with mentorship, funding, and demo day access to broader investor networks.
              </p>
              <p>
                This resource is maintained by Gravity Labs, a crypto-focused venture studio backed by Defy. We built this directory to increase transparency in the web3 funding ecosystem and help founders navigate the fundraising process more efficiently. Data is updated regularly to reflect new fund launches, team changes, and market developments.
              </p>
              <p>
                Looking for introductions or want to submit updates to your listing? Unlock the full database with email contacts to reach investors directly, or contact us to request changes to existing entries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Built by <a href="https://gravity-labs.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">Gravity Labs</a> | maintained by <a href="https://www.linkedin.com/in/collin-brenton-rego-/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">Brenton Rego</a></span>
            <span>Data last updated: Jan 13, 2025</span>
          </div>
        </div>
      </footer>

      {/* Legal Disclaimer */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-[10px] text-gray-400 leading-relaxed max-w-4xl">
            <strong>Disclaimer:</strong> This directory is provided for informational purposes only and does not constitute investment, financial, or legal advice. Listing does not imply endorsement or recommendation by Gravity Labs. Information may contain errors or be outdated; we make no warranties regarding accuracy or completeness. Users should conduct their own due diligence before engaging with any listed entity. Gravity Labs is not a registered investment adviser. Links to third-party websites are provided for convenience only. Use of this website is at your own risk. © {new Date().getFullYear()} Defize Inc. d/b/a Gravity Labs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
