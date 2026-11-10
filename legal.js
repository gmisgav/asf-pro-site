/* Footer pages. Terms and Privacy follow docs/legal/terms-draft.html and privacy-draft.html (2026-10-07-draft-1).
   Every blank counsel still has to fill is a <mark class="tbd">. Nothing here is in force. */
window.ASF_DOCS = (() => {
  const tbd = (s) => `<mark class="tbd">${s}</mark>`;
  const DRAFT = "Draft for legal review. Not in force. No effective date has been assigned.";

  return {
    terms: {
      title: "Terms and Conditions",
      meta: "Version 2026-10-07-draft-1",
      draft: DRAFT,
      intro: "These terms explain how ASF.Pro accounts, skill competitions, entries, payments and prizes work. Read them together with the Official Rules and the information shown for each competition. The Privacy Policy explains how personal information is handled.",
      sections: [
        ["The operator and these documents", `
          <p>ASF.Pro is a service for skill-based sporting photograph competitions. "We", "us" and "our" mean ${tbd("operator legal entity, registration number and registered address")}.</p>
          <p>Each competition shows its prize, ticket price, entry limits, opening and closing conditions, placement rules and any minimum-entry or cancellation policy before you enter. Restrictions are never added afterwards to reduce the rights attached to an entry you already hold.</p>`],
        ["Age and location eligibility", `
          <p>You must be at least 18 and meet any higher minimum age that applies where you are. Your date of birth must be accurate. Confirming your age does not replace our eligibility checks.</p>
          <p>Participation is available only in ${tbd("permitted launch jurisdictions")}. We may check your physical location and other eligibility details before you deposit or play. A phone calling code is not proof of location. Do not use false details, location-spoofing tools or another person's identity.</p>
          <p>Creating an account does not guarantee that you can deposit, enter or claim a prize from every location.</p>`],
        ["Accounts and sign-in", `
          <p>You can sign in with an available Google, Apple or Facebook account. We never ask for your social-provider password. You are responsible for keeping that account secure and for telling support about any unauthorized access.</p>
          <p>Your mobile number is verified before your first deposit, after a successful location check. We may ask for more verification for recovery, security, eligibility or prize fulfilment.</p>
          <p>Do not create or control more than one account to get around per-person limits.</p>`],
        ["Entering and placing a mark", `
          <p>An entry lets you place one point where you judge the centre of the removed ball to be. The competition page shows the entry price, maximum entries, closing conditions and placement policy. Review them before you confirm a purchase.</p>
          <p>Entries and placements are recorded on our servers. An interrupted payment, a browser redirect or a screen that changed on your device is not proof that an entry or payment was accepted. Check the confirmed status in your account.</p>
          <p>Some competitions close when a published target is reached, subject to a stated deadline. What happens to entries left unplaced is set out in each competition's rules.</p>`],
        ["Judging and results", `
          <p>Independent judges mark each photograph. Their marks determine the target under the competition's published judging method, and the distance of each accepted placement from that target decides its ranking. Distance is measured on the full-resolution photograph.</p>
          <p>Judges' marks are sealed before they are revealed. A result that needs review may be held until the review is complete. Published results and your account records show the confirmed outcome; a provisional display is not a final prize award.</p>
          <p>Aggregation method, review triggers and appeals: ${tbd("to be confirmed")}.</p>`],
        ["Deposits, balances and refunds", `
          <p>Deposits go through the payment methods offered in the app, and only confirmed payments are credited. Deposit limits may apply. Use only payment methods you are authorized to use.</p>
          <p>Your balance is for competition entries. There is no routine cash-withdrawal feature. This does not remove any refund or other right you have under applicable law.</p>
          <p>If a competition is voided, its rules and the transaction records decide the reversal or refund. Closing your account does not automatically send a refund; support reviews any remaining funds and arranges what is due. Refund destination and timing: ${tbd("to be confirmed")}.</p>`],
        ["Prizes, ties and claims", `
          <p>The competition page shows the prize and any delivery restrictions. A potential winner may need to provide identity, eligibility, delivery and tax information before fulfilment. A claim form or saved address does not confirm that a prize has shipped.</p>
          <p>If the final result is a tie, physical fulfilment is replaced by cash allocations based on the locked prize cost, excluding service fees, shipping, delivery, duties and similar charges. A sole winner cannot exchange a physical prize for cash unless an offer says so.</p>
          <p>Claim deadlines, unclaimed prizes and substitutions: ${tbd("to be confirmed")}.</p>`],
        ["Free entry and promotions", `
          <p><strong>No purchase necessary.</strong> A free entry route is described alongside each competition it applies to. Free and paid entries are placed and judged exactly the same way. Route, any per-person cap and postal process: ${tbd("to be confirmed")}.</p>
          <p>Promotional tickets are entitlements with a stated allowance, eligible competitions and expiry. They are not money.</p>`],
        ["Fair use", `
          <p>Do not manipulate entries, interfere with the service, coordinate with judges, access another person's account or exploit a technical fault. We may restrict actions while we investigate a credible security, eligibility or integrity concern, with a fair review.</p>`],
        ["Rights, changes and disputes", `
          <p>Rights in photographs, branding and software stay with their owners or licensors.</p>
          <p>Any change to these terms carries a new version and effective date, with notice and fresh acceptance where required. Nothing here excludes a right or liability that cannot lawfully be excluded.</p>
          <p>Governing law and dispute resolution: ${tbd("to be confirmed")}.</p>`]
      ]
    },

    privacy: {
      title: "Privacy Policy",
      meta: "Version 2026-10-07-draft-1",
      draft: DRAFT,
      intro: "This policy describes the personal information ASF.Pro uses, why, who receives it and the choices you have.",
      sections: [
        ["Who is responsible", `<p>The business responsible for your personal information is ${tbd("legal entity and address")}. Privacy questions and rights requests: ${tbd("privacy contact")}.</p>`],
        ["Account information", `
          <p>Your user ID, first and last name, email, date of birth, verified phone number, profile updates and account status, plus records of the terms shown to you, the confirmations you gave and your marketing choices.</p>
          <p>With social sign-in, the provider sends us an identifier and the profile details you allow, such as name and email. Apple may give us a private relay address. We never ask for your provider password.</p>
          <p>Phone verification uses your number and details of each verification attempt.</p>`],
        ["Location and device information", `
          <p>When an action is location-restricted, the app asks for your device location to check where you are and whether you are eligible. This can include precise coordinates. We may also process IP address, platform, device identifiers and security events.</p>
          <p>If you refuse location permission, or a check fails, location-restricted actions are unavailable.</p>`],
        ["Competition, payment and prize records", `
          <p>Entries, placements, ticket entitlements, balance activity, judging outcomes, prize claims and support conversations. We keep these to run competitions, settle results and look into disputes.</p>
          <p>Payments are handled by our payment processor. We receive transaction IDs, amounts, currency and status, not your full card details.</p>
          <p>To deliver a prize we may need your name, contact details, shipping address and information for eligibility or tax checks. We do not collect tax identifiers at sign-up.</p>`],
        ["Why we use it", `
          <p>To sign you in, run your account, check age and location, process payments, run competitions, deliver prizes, send service messages, provide support, keep the service secure, prevent fraud and keep required records.</p>
          <p>Promotional messages need a separate choice, and declining does not stop you registering. Messages about security, payments, entries and claims are service messages.</p>`],
        ["Who receives it", `
          <p>Your chosen sign-in provider, our SMS provider, payment processor, hosting and operations providers, prize fulfilment partners, authorized support staff and professional advisers, each only for the activity involved. A lawful request, dispute, audit or security incident may require a limited disclosure.</p>
          <p>Whether any data is sold or shared for advertising: ${tbd("to be confirmed")}.</p>`],
        ["Cookies and local storage", `<p>The app stores session and application state on your device or browser. Sign-in and payment providers may use their own technologies under their own privacy notices. Analytics and advertising tools: ${tbd("inventory to be confirmed")}.</p>`],
        ["Retention, security and deletion", `
          <p>We keep information only as long as its purpose and any record-keeping or dispute requirement needs, then delete or de-identify it. Access is limited to people and services that need it. No system can guarantee absolute security.</p>
          <p>You can delete your account in the app. Competition and financial records may be kept separately, and published results can remain under an anonymous display name. Deleting your account does not settle an outstanding prize or refund a balance on its own; support handles those.</p>
          <p>Retention periods by category: ${tbd("to be confirmed")}.</p>`],
        ["Your choices and rights", `
          <p>You can review your profile in the app and ask us to correct anything you cannot change there. You can opt out of marketing at any time.</p>
          <p>Depending on where you live, you may have rights to access, correct, delete or port your information and to make choices about certain uses. We may need to verify your identity, and some information may have to be kept for a permitted reason. How to submit a request, response times and appeals: ${tbd("to be confirmed")}.</p>`],
        ["International processing and minors", `
          <p>Providers may process information outside your state or country: ${tbd("locations and safeguards to be confirmed")}.</p>
          <p>ASF.Pro is for adults. If we find information belonging to someone under the participation age, we restrict the account and delete the information through our safeguarding process.</p>`],
        ["Updates", `<p>Each version of this policy carries a version and an effective date. We give notice of material changes and ask for a fresh choice where the law requires it.</p>`]
      ]
    },

    "responsible-play": {
      title: "Responsible Play",
      meta: "Player guidance",
      draft: "Draft. The in-app controls listed below are planned and must be live before this page is published.",
      intro: "ASF.Pro is a game of skill, and it should stay fun. Set your own limits before you play, and stop if it stops feeling like entertainment.",
      sections: [
        ["Play within your means", `
          <ul>
            <li>Decide how much you are comfortable spending before you start, and stick to it.</li>
            <li>Only spend money you can afford to lose. Entries are for fun, not a way to earn income.</li>
            <li>Never chase a result by buying more entries than you planned.</li>
            <li>Take regular breaks, and do not play when you are upset, tired or under the influence.</li>
          </ul>`],
        ["Controls in the app", `
          <ul>
            <li><strong>Spend limits</strong> per day, week or month.</li>
            <li><strong>Cool-off</strong>: pause your account for a set period.</li>
            <li><strong>Self-exclusion</strong>: block all entry for a longer period. It cannot be undone early, and we send no marketing while it is on.</li>
          </ul>
          <p>Find them in Profile › Responsible Play. ${tbd("confirm these controls are live before publishing")}</p>`],
        ["Signs it might be a problem", `
          <ul>
            <li>Spending more time or money than you meant to.</li>
            <li>Borrowing money or skipping bills to play.</li>
            <li>Hiding how much you play from people close to you.</li>
            <li>Feeling anxious or irritable when you cannot play.</li>
          </ul>`],
        ["Get help", `
          <p>Free, confidential support is available 24/7 from the National Council on Problem Gambling: call <strong>1-800-GAMBLER</strong>, or visit <a href="https://www.ncpgambling.org/help-treatment/" target="_blank" rel="noopener">ncpgambling.org</a> for chat and local resources.</p>
          <p>You can also contact ASF.Pro support at any time to set a limit or close your account.</p>`],
        ["Under 18s", `<p>ASF.Pro is only for adults. We check age and eligibility, and close any account that belongs to someone under the participation age.</p>`]
      ]
    },

    support: {
      title: "Support",
      meta: "Help with your account, entries and prizes",
      intro: "The fastest way to reach us is in the app: Profile › Help opens our FAQ and a chat with the support team.",
      sections: [
        ["My entry or payment doesn't show", `<p>Only confirmed payments and entries count. If a payment was interrupted, check the status in your account before trying again. If it still looks wrong, contact support with the time of the payment; we check the transaction records and fix it.</p>`],
        ["I can't place a mark", `<p>Placing a mark needs a successful location check in the same session. Allow location access, make sure you are in an eligible state, and try again. A VPN or location-spoofing app will cause the check to fail.</p>`],
        ["When are results published?", `<p>After a competition closes, the judges' sealed marks are opened and the results are published. A result under review may take longer. You'll get a notification in the app.</p>`],
        ["I won. What happens next?", `<p>We notify you in the app. Confirm your details and delivery address in the claim form; we may ask for identity or tax information before the prize ships.</p>`],
        ["How do I enter for free?", `<p>Every competition with a free entry route explains it in its Official Rules. Free entries are judged exactly like paid ones.</p>`],
        ["Closing or deleting my account", `<p>Delete your account in Profile › Account. Any remaining balance or open prize is handled by support; deletion does not settle them automatically.</p>`]
      ]
    },

    contact: {
      title: "Contact",
      meta: "Reach the ASF.Pro team",
      intro: "For help with your account, start with support in the app; it's the fastest route.",
      sections: [
        ["Player support", `<p>In the app: Profile › Help.<br>Email: ${tbd("support email")}</p>`],
        ["Privacy requests", `<p>Access, correction or deletion requests: ${tbd("privacy contact")}</p>`],
        ["Free entry by mail", `<p>${tbd("postal address for free entry")}</p>`],
        ["Business and press", `<p>${tbd("business email")}</p>`],
        ["Company", `<p>${tbd("operator legal entity")}<br>${tbd("registered address")}</p>`]
      ]
    }
  };
})();
