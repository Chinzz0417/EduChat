function showSignUp() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('signup-page').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('signup-page').style.display = 'none';
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert('Sign-up successful! You can now log in.');
        showLogin();
        
        document.getElementById('signup-username').value = '';
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';
    } else {
        alert('Please fill out all fields.');
    }
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('signup-page').style.display = 'none';
        document.getElementById('chatbot-page').style.display = 'block';

        document.getElementById('video-background').style.display = 'none';

        document.body.style.backgroundImage = "url('backgrounds/bgpic.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";

        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';

    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    alert('You have logged out.');
    document.getElementById('chatbot-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('signup-page').style.display = 'none';

    document.getElementById('video-background').style.display = 'block';
    
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
    
    document.getElementById('chat-box').innerHTML = 'Welcome to the EduChat!';
}

function sendMessage() {
    var userMessage = document.getElementById('chat-input').value;
    if (userMessage.trim() === "") return;

    var chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="user-message">${userMessage}</div>`;

    document.getElementById('chat-input').value = "";
    var botResponse = getBotResponse(userMessage);
    chatBox.innerHTML += `<div class="bot-message"><strong>EduChat:</strong> ${botResponse}</div>`;

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Hello! How can I assist you today";
    } else if (message.includes("how are you")) {
        return "I'm just a bot, but I'm functioning as expected!";
    } else if (message.includes("your name") || message.includes("who are you")) {
        return "I am EduChat, your virtual assistant!";
    } else if (message.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else if (message.includes("id") && (message.includes("get") || message.includes("process"))) {
        return "Submit a picture with a white background to library@icct.edu.ph along with the following details:<br><br> Name:<br> Course:<br> Student No.:<br> Campus:<br> Contact No.:<br><br>Wait for a Gmail response informing you of the date you can claim it at the campus";
    } else if (message.includes("pay") && message.includes("uniform")) {
        return "Generate a code on the student portal and process the payment using Gcash.";
    } else if (message.includes("claim") && message.includes("uniform")) {
        return "Take a screenshot of your ledger and print it out. Go to the campus to claim the uniform.";
    } else if (message.includes("school policies") || message.includes("school policy")) {
        return "School policies are formal guidelines and rules that govern the behaviour, actions, and procedures within an educational institution. They are designed to create a safe, respectful, and productive learning environment. Here are the main categories of school policies:<br><br>: You can find School Policies in handbook given.";
    } else if (message.includes("handbook") && (message.includes("get") || message.includes("where can I get"))) {
        return "Official Website: Check the ICCT Colleges website. Many institutions provide downloadable copies of their student handbooks in the “Current Students” or “Resources” section.<br><br>Admissions Office: Contact the admissions or registrar’s office directly. They can often provide a copy of the handbook or guide you to where you can find it.<br><br>Student Services: Reach out to student services or academic advising. They typically have handbooks and can answer any specific questions you have.<br><br>Library: If you’re on campus, the college library may have physical copies of the handbook available.<br><br>Ask Faculty or Staff: Professors or academic advisors can often help direct you to the right resources for obtaining the handbook.";
    } else if (message.includes("what is sog")) {
        return "Summary of Grades.";
    } else if (message.includes("use of sog")) {
        return "You can use the summary of grades for evaluation in your prospectus, verify your grades, and to see your accurate grades.";
    } else if (message.includes("get sog")) {
        return "Send an email on this Gmail address mganda@icct.edu.ph together with your information, here’s format:<br><br>Good day Ms. Anda I would like to request my summary of grades. These are my details.<br><br>Student number:<br>Name:<br>Course:<br>Purpose why you’re requesting:";
    } else if (message.includes("email is sent")) {
        return "Wait for the schedule that will be given to your email and after that on your scheduled day you have to pay 100 pesos and print the receipt.";
    } else if (message.includes("what is sip")) {
        return "Student Internship Program.";
    } else if (message.includes("is sip important")) {
        return "Yes, once you are in your 4th year, you’ll have to take internship program before you graduate. It’ll be one of your subjects.";
    } else if (message.includes("how to enroll") && message.includes("sip")) {
        return "Wait for the announcement on the ICCT page, they give all informations what to do and what are the process there.";
    } else if (message.includes("failed grades") && (message.includes("portal") || message.includes("failed grades on portal"))) {
        return "Get SOG and verify your grades first.";
    } else if (message.includes("still fail after") && message.includes("verify")) {
        return "Talk to the professor, if they decided not to give you a chance, you’ll have to retake the subject.";
    } else if (message.includes("retake") && message.includes("subject")) {
        return "Wait for the subject to open for you to request to add subject.";
    } else if (message.includes("enroll in icct")) {
        return "You can generally follow these steps:<br><br>Visit the Official Website: Check the ICCT Colleges website for enrollment information and application forms.<a href='https://sms.icct.edu.ph/login' target='_blank'>https://sms.icct.edu.ph/login</a><br><br>Select a Program: Choose the program you want to enroll in.<br><br>Prepare Required Documents: Gather necessary documents like transcripts, identification, and exam results.<br><br>Complete the Application: Fill out the application form accurately.<br><br>Submit the Application: Send the completed application along with required documents and any application fee.<br><br>Interview/Exam: Some programs may require an interview or entrance exam.<br><br>Await Acceptance: Check for notification regarding your acceptance status.<br><br>Register for Classes: Once accepted, follow instructions to register for classes.<br><br>Pay Tuition: Complete any financial arrangements or pay tuition fees.";
    } else if (message.includes("get reference")) {
        return "Log in to student portal, go to ACCOUNT, click PAY ONLINE and click what you will pay, then click Generate Payment Code.<br><br>Once reference number was generated: you can pay thru GCASH, 711, or EC PAY.<br><br>Before paying, double check the info your inputted0 to avoid errors.<br><br>After payment: you will receive a text message to your registered phone number “ICCT info” it means that you payment has been received by ICCT.";
    } else if (message.includes("drop subject") && message.includes("subject") || (message.includes("dropping") && message.includes("subject"))) {
        return "To drop a subject, follow these steps:<br><br>First, go to window 12 and inform them that you want to drop a subject.<br><br>Fill out the necessary forms for dropping the subject and state the reason why do you want to drop that subject.<br><br>After filling out the form, go to the guidance office to have it signed and to find out if your tuition refund will be 5%, 10%, 15%, or 20% after dropping the subject.<br><br>Next, go to the academic office to have the form signed by the academic affairs office. Then, return to window 12 to get it signed by the student affairs office/registrar (Mr. Paringit).<br><br>After the trimester, go to the school to claim your tuition refund.";
    } else if (message.includes("claim") && message.includes("prospectus")) {
        return "To claim your prospectus, you must first go to the main branch at ICCT Cainta. Navigate your way from the entrance to the administration offices (First Floor Only), where you will have to line yourself up at Window 1 or 3.<br><br>The following are the requirements you needed to present to claim your prospectus:<br>• Form 137 (your copy will be given from window 7, after it is verified that the main office has the original document)<br>• Latest SOG<br><br>If circumstances are that you claimed your Prospectus for the first time during your 4th or 5th year, you must write a formal letter of reason why you claimed your document, get it verified by the clerk at window 1 or 3, and get it notarized as soon as possible before returning it along with your other required documents (listed above).";
    } else if (message.includes("how soon") && message.includes("prospectus")) {
        return "It is recommended that you claim your prospectus as soon as you reach your second year as a student.";
    } else {
        return "Sorry, I didn't understand that. Can you please rephrase?";
    }
}

document.getElementById("chat-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
