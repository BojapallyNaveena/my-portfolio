import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def build_pdf():
    pdf_path = r"c:\Users\HP\OneDrive\consistency\portfolio\public\naveena_resume.pdf"
    doc = SimpleDocTemplate(pdf_path, pagesize=letter,
                            rightMargin=40, leftMargin=40, topMargin=40, bottomMargin=40)
    story = []
    
    # Styles
    styles = getSampleStyleSheet()
    
    # Custom colors
    primary_color = colors.HexColor("#111827")  # Slate Gray / Dark Charcoal
    secondary_color = colors.HexColor("#4b5563")  # Slate gray body text
    text_color = colors.HexColor("#374151")  # Slate
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=primary_color,
        spaceAfter=4
    )
    
    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=text_color,
        spaceAfter=12
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=14,
        textColor=primary_color,
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=text_color,
        spaceAfter=3
    )
    
    bullet_style = ParagraphStyle(
        'BulletTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=text_color,
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=2
    )

    # Header Section
    story.append(Paragraph("BOJAPALLY NAVEENA", title_style))
    story.append(Paragraph("Nizamabad, Telangana, India<br/>9666898139 | bojapallynaveena@gmail.com", contact_style))
    
    # Links Table
    links_data = [
        [Paragraph("<b>LinkedIn:</b> https://www.linkedin.com/in/bojapally-naveena-27b5bb34a", body_style)],
        [Paragraph("<b>GitHub:</b> https://github.com/BojapallyNaveena", body_style)],
        [Paragraph("<b>LeetCode:</b> https://leetcode.com/u/naveena_37/", body_style)],
        [Paragraph("<b>HackerRank:</b> https://www.hackerrank.com/profile/bojapallynaveena", body_style)]
    ]
    t_links = Table(links_data, colWidths=[532])
    t_links.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_links)
    story.append(Spacer(1, 8))

    # Divider Helper
    def add_divider():
        t = Table([[""]], colWidths=[532])
        t.setStyle(TableStyle([
            ('LINEBELOW', (0,0), (-1,-1), 0.75, colors.HexColor("#d1d5db")),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(t)
        story.append(Spacer(1, 6))

    # Objective Section
    story.append(Paragraph("OBJECTIVE", section_heading))
    add_divider()
    story.append(Paragraph("Aspiring Software Developer with strong foundations in programming and web development. Seeking an internship/entry-level role to apply problem-solving skills, data structures knowledge, and build scalable applications in a growth-oriented organization.", body_style))
    story.append(Spacer(1, 8))

    # Skills Section
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    add_divider()
    skills_data = [
        [Paragraph("• <b>Languages:</b> C, Python, Java(Basics)", body_style)],
        [Paragraph("• <b>Web Development:</b> HTML, CSS", body_style)],
        [Paragraph("• <b>Core Concepts:</b> Data Structures & Algorithms (Basics), OOPs", body_style)],
        [Paragraph("• <b>Problem Solving:</b> Solved 70+ problems on LeetCode and HackerRank", body_style)],
        [Paragraph("• <b>Tools & Platforms:</b> Git, GitHub, VS Code, Jupyter Notebook, Google Colab, Eclipse", body_style)],
        [Paragraph("• <b>Database:</b> MySQL(Basics)", body_style)]
    ]
    t_skills = Table(skills_data, colWidths=[532])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 8))

    # Projects Section
    story.append(Paragraph("PROJECTS", section_heading))
    add_divider()
    
    # Project 1: E-Commerce
    p1_head = Table([
        [Paragraph("<b>E-Commerce Website | HTML, CSS, JavaScript</b>", body_style), Paragraph("<b>May 2025 – June 2025</b>", ParagraphStyle('RightText', parent=body_style, alignment=2))]
    ], colWidths=[380, 152])
    p1_head.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    story.append(p1_head)
    story.append(Paragraph("• Built a responsive e-commerce web application", bullet_style))
    story.append(Paragraph("• Implemented shopping cart, product search, and filtering features", bullet_style))
    story.append(Paragraph("• Improved UI/UX with mobile-friendly design", bullet_style))
    story.append(Spacer(1, 4))
    
    # Project 2: AI Study Plan
    p2_head = Table([
        [Paragraph("<b>AI Driven Study Plan (Real-Time Project)</b>", body_style), Paragraph("", body_style)]
    ], colWidths=[380, 152])
    p2_head.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    story.append(p2_head)
    story.append(Paragraph("• Developed a system to generate personalized study schedules", bullet_style))
    story.append(Paragraph("• Applied logical thinking and structured problem-solving", bullet_style))
    story.append(Spacer(1, 4))

    # Project 3: HyperLocal Connect
    p3_head = Table([
        [Paragraph("<b>Hyperlocal Connect – Community Job & Service Platform</b>", body_style), Paragraph("<b>2026 – Present</b>", ParagraphStyle('RightText', parent=body_style, alignment=2))]
    ], colWidths=[380, 152])
    p3_head.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    story.append(p3_head)
    story.append(Paragraph("• <b>HTML, CSS, JavaScript, MySQL</b>", body_style))
    story.append(Paragraph("• Developed a hyperlocal platform for connecting users with local jobs and services", bullet_style))
    story.append(Paragraph("• Implemented dual-role login system for Job Seekers and Job Providers", bullet_style))
    story.append(Paragraph("• Built dashboards, messaging system, and job status tracking features", bullet_style))
    story.append(Paragraph("• Designed responsive UI with secure authentication and location-based functionality", bullet_style))
    story.append(Spacer(1, 4))

    # Project 4: Healthcare Storage
    p4_head = Table([
        [Paragraph("<b>Secure Healthcare Data Storage Using Blockchain Technique</b>", body_style), Paragraph("", body_style)]
    ], colWidths=[380, 152])
    p4_head.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    story.append(p4_head)
    story.append(Paragraph("• <b>Java | MySQL</b>", body_style))
    story.append(Paragraph("• Developed a secure healthcare data storage system using blockchain concepts for enhanced data security", bullet_style))
    story.append(Paragraph("• Designed database structure to manage and protect patient records efficiently", bullet_style))
    story.append(Paragraph("• Improved data integrity and reduced risk of unauthorized access", bullet_style))
    story.append(Paragraph("• Implemented secure storage and retrieval mechanisms for healthcare information", bullet_style))
    story.append(Spacer(1, 8))

    # Experience Section
    story.append(Paragraph("INTERNSHIP EXPERIENCE", section_heading))
    add_divider()
    exp_head = Table([
        [Paragraph("<b>Web Development Intern – Apex Planet</b>", body_style), Paragraph("<b>May 2025 – June 2025</b>", ParagraphStyle('RightText', parent=body_style, alignment=2))]
    ], colWidths=[380, 152])
    exp_head.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    story.append(exp_head)
    story.append(Paragraph("• Developed mini projects using front-end technologies", bullet_style))
    story.append(Paragraph("• Strengthened knowledge in HTML, CSS, JavaScript", bullet_style))
    story.append(Paragraph("• Practiced debugging and real-world development workflows", bullet_style))
    story.append(Spacer(1, 8))

    # Education Section
    story.append(Paragraph("EDUCATION", section_heading))
    add_divider()
    edu_data = [
        [Paragraph("<b>B.Tech in Computer Science and Engineering (AI & ML)</b><br/>Guru Nanak Institute of Technology, Hyderabad", body_style), Paragraph("<b>2023 – 2027</b>", ParagraphStyle('RightText', parent=body_style, alignment=2))],
        [Paragraph("<b>Intermediate – 97.8%</b><br/>Govt. Jr. Girls College, Armoor", body_style), Paragraph("<b>2023</b>", ParagraphStyle('RightText', parent=body_style, alignment=2))],
        [Paragraph("<b>SSC – 10 GPA</b><br/>Z.P High School, Velpur", body_style), Paragraph("<b>2021</b>", ParagraphStyle('RightText', parent=body_style, alignment=2))]
    ]
    t_edu = Table(edu_data, colWidths=[380, 152])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 8))

    # Certifications Section
    story.append(Paragraph("CERTIFICATIONS", section_heading))
    add_divider()
    certs = [
        "• Participation Certificate – Departmental Hackathon",
        "• Certificate of Excellence – Organizing Crew (Data Visualization & Analytics with Python)",
        "• Basic Problem Solving Certificate – HackerRank",
        "• Python (Basic) Certificate – HackerRank",
        "• AI Data Engineer Programme – Skill India Digital Hub",
        "• Python Programming – Skill India Digital Hub",
        "• Data Analytics with Python – NPTEL",
        "• Career Skills in Software Development – LinkedIn Learning",
        "• Web Development Internship – Apex Planet"
    ]
    for c in certs:
        story.append(Paragraph(c, body_style))
    story.append(Spacer(1, 8))

    # Achievements Section
    story.append(Paragraph("ACHIEVEMENTS", section_heading))
    add_divider()
    achievements = [
        "• Department Topper",
        "• 1st place in Intermediate College",
        "• Winner – Internal Hackathon",
        "• 1st place in Essay Writing"
    ]
    for a in achievements:
        story.append(Paragraph(a, body_style))
    story.append(Spacer(1, 8))

    # Extra-Curricular Section
    story.append(Paragraph("EXTRA-CURRICULAR ACTIVITIES", section_heading))
    add_divider()
    activities = [
        "• Student Coordinator – IGNITE AIML Event",
        "• Organized 2-day Hands-on Workshop & Hackathon",
        "• Organized college tech fest",
        "• Participated in coding competitions",
        "• NSS Volunteer"
    ]
    for act in activities:
        story.append(Paragraph(act, body_style))
    story.append(Spacer(1, 8))

    # Personal Details Section
    story.append(Paragraph("PERSONAL DETAILS", section_heading))
    add_divider()
    story.append(Paragraph("• <b>Languages:</b> English, Hindi, Telugu", body_style))

    # Build document
    doc.build(story)
    print("Resume PDF Generated Successfully!")

if __name__ == "__main__":
    build_pdf()
