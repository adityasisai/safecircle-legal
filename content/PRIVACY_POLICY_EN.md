# SafeCircle — Privacy Policy

**Last updated:** [DATE]

This privacy policy explains what personal data SafeCircle collects when you use the SafeCircle mobile app, why we collect it, how long we keep it, and the rights you have under the EU General Data Protection Regulation (GDPR).

We've tried to keep this short and plain-language. If anything is unclear, contact us at the address in section 12.

---

## 1. Who we are

SafeCircle is operated by:

**[FULL LEGAL NAME — e.g. "Aditya Sisai" if sole trader, or company name if registered]**
[STREET AND HOUSE NUMBER]
[POSTAL CODE] [CITY]
Germany

Contact: **privacy@safecircle.app**

We are the data controller within the meaning of Art. 4(7) GDPR for all personal data processed in connection with the SafeCircle app.

---

## 2. What we collect, when, and why

We only collect data we actually need to run the service. Specifically:

### Account data
- **Email address** — when you sign in. Used to deliver the 6-digit sign-in code and to identify your account. *Legal basis: Art. 6(1)(b) GDPR — performance of the user contract.*
- **First name** (members and helpers) and **last initial** (helpers only) — shown to the other party during an active help request so they can identify you. *Legal basis: Art. 6(1)(b).*
- **Age confirmation (≥16 years)** — required at member sign-up. We store only the boolean confirmation, not your date of birth. *Legal basis: Art. 6(1)(c) — legal obligation related to minor protection.*
- **Helper profile photo** — uploaded by helpers during onboarding. Shown to members during the QR-code identity check. *Legal basis: Art. 6(1)(b).*
- **Helper organisation membership** — the organisation that approved you as a helper. Shown to members during identity verification. *Legal basis: Art. 6(1)(b).*

### Help-request data
- **Help-request records** — the category (e.g. "I'm lost"), optional free text you write, your approximate location, the assigned helper, and timestamps for each stage of the walk. Used to coordinate the help request and as a record in case of a dispute or report. *Legal basis: Art. 6(1)(b).*
- **Ratings and comments** — optionally submitted by a member after a completed walk. Used to monitor helper quality. *Legal basis: Art. 6(1)(b) and Art. 6(1)(f) — our legitimate interest in service quality.*
- **Reports** — submitted by members to flag misconduct. Sent to the helper's organisation for review. *Legal basis: Art. 6(1)(f).*

### Location data
- **While not in an active request:** we briefly check your location when you open the "Find Helpers" screen so we can match you to a nearby event geofence. The location is not stored.
- **During an active request:** your approximate location is continuously updated and shared with the other party (helper or member you are walking with), so you can see each other on the map.
- **Background tracking:** on Android, once you accept "Allow all the time" location permission, your location continues updating to the other party even when the SafeCircle app is in the background or the screen is locked. While this is happening, Android shows a persistent notification reminding you that SafeCircle is sharing your location.
- The background tracking **stops automatically** the moment the help request ends (arrived safely, cancelled, or completed by either party).
- *Legal basis: Art. 6(1)(b) and Art. 6(1)(a) — your explicit consent via the OS permission prompt, withdrawable at any time in your phone settings.*

### Push-notification data
- We use **Google Firebase Cloud Messaging (FCM)** to deliver push notifications to helpers when a member nearby requests help. For this we store a device-specific push token issued by Google and we send the helper a short notification ("Help requested nearby — category: Lost"). *Legal basis: Art. 6(1)(b).*
- Google receives the push token and the notification payload as part of message delivery. See Google's privacy policy: https://policies.google.com/privacy.

### Automatically generated data
- **Sign-in events** (timestamp, IP address) are logged by our authentication provider for security and abuse-prevention purposes. *Legal basis: Art. 6(1)(f).*
- **QR-code verification logs** (when a member scans a helper's QR code) — timestamp, helper ID, request ID, outcome. Used for abuse prevention. *Legal basis: Art. 6(1)(f).*

---

## 3. What we explicitly do NOT collect

We do not collect, store, or process:

- Government ID, passport, or other identity documents
- Bank or payment data of any kind
- Precise GPS history (we only know your approximate location at the moment you open the app or during an active request)
- Background, health, or biometric data
- Phone contacts, calendar, photo library, or any data from other apps on your device
- Tracking data for advertising or marketing

We do not sell data, do not use third-party advertising trackers, and do not share data with marketers.

---

## 4. Who has access to your data

Your data is shared with:

- **The other party in an active help request** — during an active walk, the helper sees the member's first name and live location; the member sees the helper's first name + last initial, photo, organisation, and live location.
- **Helper organisations** — admins of the organisation a helper belongs to can see that helper's profile, on-duty status, and any reports filed against that helper. Admins cannot see member data.
- **SafeCircle operational staff** — we may access your data when strictly necessary for support, fraud investigation, or safety incidents.

We use the following processors, all bound by Data Processing Agreements (Auftragsverarbeitungsverträge):

- **Supabase Inc.** — database, authentication, file storage. Your data is stored on Supabase infrastructure in the EU ([REGION — e.g. Frankfurt, Germany]).
- **Google LLC (Firebase Cloud Messaging)** — delivery of push notifications. Google receives only the push token and the notification payload, not the underlying help-request data.
- **Google LLC (Maps SDK for Android)** — renders the map you see during an active request. Map tile requests reveal your approximate location to Google.
- **Expo / EAS** — mobile-app build infrastructure. Does not receive end-user runtime data.

---

## 5. International data transfers

Your account data is stored on Supabase infrastructure within the European Union and is not routinely transferred to third countries.

Some processors (Google for FCM and Maps SDK) operate globally. Where data leaves the EU, the transfer is covered by the EU-US Data Privacy Framework, Standard Contractual Clauses (Art. 46 GDPR), or another approved transfer mechanism. You can request the specific safeguards in writing.

---

## 6. How long we keep your data

- **Account data:** kept while your account is active. Deleted within 30 days after you delete your account from the app or request deletion by email.
- **Helper photos:** deleted within 30 days of helper-status revocation or account deletion.
- **Help-request records:** kept for 12 months after the request completes for support and dispute purposes, then anonymised.
- **Ratings and comments:** kept while the rated helper account exists; deleted when the helper account is deleted.
- **Reports:** kept for 12 months for investigation; anonymised after.
- **Authentication and verification logs:** kept for 90 days for abuse prevention; deleted after.
- Backups may persist for an additional 30 days after the primary deletion.

---

## 7. Your rights under GDPR

You have the right to:

- **Access** the personal data we hold about you (Art. 15)
- **Rectify** inaccurate data (Art. 16)
- **Erasure** ("right to be forgotten") (Art. 17) — you can delete your account directly from the Profile screen in the app, or by email
- **Restrict** processing (Art. 18)
- **Receive** your data in a portable machine-readable format (Art. 20)
- **Object** to processing based on legitimate interest (Art. 21)
- **Withdraw** your consent at any time (Art. 7(3)) — for example by revoking location or notification permission in your phone settings
- **Lodge a complaint** with a supervisory authority (Art. 77)

To exercise these rights, email **privacy@safecircle.app**. We respond within one month of the request (Art. 12(3) GDPR).

The competent supervisory authority for SafeCircle in Germany is:

**[NAME of state DPA — for Berlin: Berliner Beauftragte für Datenschutz und Informationsfreiheit; for federal matters: Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)]**
https://www.bfdi.bund.de/

---

## 8. Push notifications and your phone settings

You can turn off notifications at any time in your phone's Settings → Apps → SafeCircle → Notifications. Doing so will mean you (as a helper) no longer receive new help-request alerts, but the rest of the app continues to work.

You can similarly turn off location access at any time. Doing so will prevent the helper-finding and active-walk features from working but will not affect your account.

---

## 9. Children

SafeCircle is not directed at users under 16 years of age. We require age confirmation at sign-up and do not knowingly collect data from users under 16. If you believe a minor has created an account, please email **privacy@safecircle.app** and we will delete the account.

---

## 10. Security

We protect your data through:

- TLS encryption for all data in transit
- Encryption at rest on Supabase infrastructure
- Row-Level Security policies on the database (each user can only access their own data)
- Principle of least privilege for staff access
- Regular security review of code and infrastructure

No system is 100% secure. In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the supervisory authority within 72 hours and, where required, notify you directly (Art. 33–34 GDPR).

---

## 11. Changes to this policy

We will notify users of material changes via an in-app notice and (where we have an email address) by email, at least 30 days before they take effect. The "Last updated" date at the top of this document always reflects the current version.

---

## 12. Contact

For all privacy-related questions, requests, or complaints:

- **Email:** privacy@safecircle.app
- **Postal:** [FULL LEGAL NAME], [STREET], [POSTAL CODE] [CITY], Germany

We are a small team and aim to respond within a few business days.

---

*This English version is provided for convenience. The legally binding version is the German one ("Datenschutzerklärung"). If there is any conflict between this English version and the German version, the German version prevails.*
