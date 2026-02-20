# SPEN Lab Website Maintenance Guide

<p align="center">
  <img src="images/logo.png" alt="SPEN Lab Logo" width="250"/>
</p>

This comprehensive guide provides detailed instructions for maintaining and updating the SPEN Lab website. It is designed for lab members, students, and staff who need to make routine content updates without extensive web development experience.

## 📋 Table of Contents

1. [Team Page Management](#team-page-management)
   - [Lab Director Section](#updating-the-lab-director-section)
   - [Team Member Profiles](#managing-team-member-profiles)
   - [Team Statistics](#updating-team-statistics)
   - [Research Highlights](#updating-research-highlights)

2. [Research & Publications](#research-and-publications)
   - [Adding Publications](#adding-research-publications)
   - [Managing Publication Resources](#managing-publication-resources)
   - [Research Areas](#updating-research-areas)

3. [Professional Service](#professional-service)
   - [Conference Roles](#adding-conference-entries)
   - [Editorial Positions](#adding-editorial-roles)
   - [Professional Memberships](#adding-professional-memberships)
   - [Grant Reviews](#adding-grant-review-panels)

4. [Courses & Teaching](#courses-and-teaching)
   - [Course Information](#updating-course-information)
   - [Course Resources](#managing-course-resources)

5. [Visual Elements](#visual-elements)
   - [Image Guidelines](#uploading-new-images)
   - [Logo Management](#modifying-logo-sizes)
   - [Icon Strip](#editing-the-icon-strip)

6. [Forms & Interactive Elements](#forms-and-interactive-elements)
   - [Meeting Request Form](#managing-the-meeting-request-form)

7. [Troubleshooting](#troubleshooting)
   - [Common Issues](#common-issues)
   - [Layout Problems](#layout-problems)
   - [Mobile Responsiveness](#mobile-responsiveness-issues)

---

## Team Page Management

The team page (`team.html`) showcases lab members in a professional, hierarchical structure with detailed profiles for each member.

### Updating the Lab Director Section

The Lab Director section prominently features Dr. Ahmed Sherif with his credentials, research focus, and contact information.

#### Director Photo

1. **Prepare the image**:
   - Recommended size: 400x500 pixels
   - Professional headshot with neutral background
   - Save as JPG or PNG format
   - Optimize for web (file size under 200KB)

2. **Replace the image file**:
   - Save the new image to `/images/team/` directory
   - Use descriptive filename: `dr-sherif.jpg` or `director-ahmed-sherif.jpg`

3. **Update the HTML**:
   ```html
   <div class="director-image">
     <img src="images/team/dr-sherif.jpg" alt="Dr. Ahmed Sherif - SPEN Lab Director" />
   </div>
   ```

#### Director Information

1. **Update the HTML in `team.html` (director-info section)**:
   ```html
   <div class="director-info">
     <h3>Dr. Ahmed B. T. Sherif</h3>
     <p class="director-title">Assistant Professor, School of Computing Sciences and Computer Engineering</p>
     <p class="director-bio">
       Dr. Sherif leads the Security and Privacy of Emerging Networks (SPEN) Lab at the University of Southern Mississippi. His research focuses on privacy-preserving technologies, network security, and AI-enhanced cybersecurity solutions.
     </p>
     <p>PhD in Computer Engineering, University of Waterloo, Canada</p>
     <div class="director-links">
       <a href="mailto:Ahmed.Sherif@usm.edu" class="profile-link"><i class="fas fa-envelope"></i> Email</a>
       <a href="https://www.researchgate.net/profile/Ahmed-Sherif" target="_blank" class="profile-link"><i class="fab fa-researchgate"></i> ResearchGate</a>
       <a href="https://scholar.google.com/citations?user=XXXX" target="_blank" class="profile-link"><i class="fas fa-graduation-cap"></i> Google Scholar</a>
       <a href="https://www.linkedin.com/in/ahmed-sherif-phd" target="_blank" class="profile-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
     </div>
   </div>
   ```

2. **Update links** as needed by changing the `href` attributes

### Managing Team Member Profiles

Team members are organized by academic level (PhD, Master's, Undergraduate) with detailed profile cards.

#### Adding a New Team Member

1. **Prepare the profile photo**:
   - Square aspect ratio (1:1)
   - Recommended size: 400x400 pixels
   - Professional appearance with consistent style
   - Save in `/images/team/` directory with naming convention: `firstname-lastname.jpg`

2. **Add the team member card** to the appropriate section:

   ```html
   <article class="team-card">
     <img src="images/team/firstname-lastname.jpg" alt="Full Name - PhD Student" />
     <div class="profile-info">
       <h3>Full Name</h3>
       <p class="profile-title">PhD Student in Computer Science</p>
       
       <div class="research-focus">
         <h4>Research Focus:</h4>
         <p>Description of research interests and specialization areas</p>
       </div>
       
       <div class="current-project">
         <h4>Current Project:</h4>
         <p>Brief description of ongoing research project</p>
       </div>
       
       <div class="profile-links">
         <a href="mailto:name@usm.edu" class="profile-link"><i class="fas fa-envelope"></i> Email</a>
         <a href="https://github.com/username" target="_blank" class="profile-link"><i class="fab fa-github"></i> GitHub</a>
         <a href="https://www.linkedin.com/in/username" target="_blank" class="profile-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
       </div>
     </div>
   </article>
   ```

3. **Available Social/Academic Links** (use as needed):
   ```html
   <!-- Email -->
   <a href="mailto:email@usm.edu" class="profile-link"><i class="fas fa-envelope"></i> Email</a>
   
   <!-- GitHub -->
   <a href="https://github.com/username" target="_blank" class="profile-link"><i class="fab fa-github"></i> GitHub</a>
   
   <!-- LinkedIn -->
   <a href="https://linkedin.com/in/username" target="_blank" class="profile-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
   
   <!-- Google Scholar -->
   <a href="https://scholar.google.com/citations?user=ID" target="_blank" class="profile-link"><i class="fas fa-graduation-cap"></i> Google Scholar</a>
   
   <!-- ResearchGate -->
   <a href="https://www.researchgate.net/profile/Name" target="_blank" class="profile-link"><i class="fab fa-researchgate"></i> ResearchGate</a>
   
   <!-- Personal Website -->
   <a href="https://website.com" target="_blank" class="profile-link"><i class="fas fa-globe"></i> Website</a>
   ```

#### Editing an Existing Team Member

1. Locate the team member's card in `team.html`
2. Update any of the following elements as needed:
   - Profile photo (`<img src="...">`)
   - Name (`<h3>Full Name</h3>`)
   - Title (`<p class="profile-title">...</p>`)
   - Research focus (`<div class="research-focus">...</div>`)
   - Current project (`<div class="current-project">...</div>`)
   - Contact links (`<div class="profile-links">...</div>`)

#### Removing a Team Member

1. Locate the team member's card in `team.html`
2. Delete the entire `<article class="team-card">...</article>` block for that member
3. Consider moving the member to an "Alumni" section instead of complete removal

#### Adding a New Team Category

To add a new category (e.g., "Postdoctoral Researchers", "Visiting Scholars", "Alumni"):

```html
<section class="team-group">
  <h2>Category Title</h2>
  <div class="team-cards">
    <!-- Add team member cards here -->
  </div>
</section>
```

### Updating Team Statistics

Team statistics highlight key lab metrics in a visually appealing format:

1. Locate the statistics section:
   ```html
   <div class="team-stats">
     <div class="stat-box">
       <span class="stat-number">10+</span>
       <span class="stat-label">Active Researchers</span>
     </div>
     <div class="stat-box">
       <span class="stat-number">30+</span>
       <span class="stat-label">Publications</span>
     </div>
     <div class="stat-box">
       <span class="stat-number">5</span>
       <span class="stat-label">Research Areas</span>
     </div>
   </div>
   ```

2. Update the numbers and labels as needed to reflect current lab statistics

### Updating Research Highlights

The Research Highlights section showcases key lab achievements with icons and descriptions.

#### Adding or Editing a Highlight

1. Locate the Research Highlights section:
   ```html
   <section class="research-highlights">
     <h2>Research Highlights</h2>
     <div class="highlights-container">
       <!-- Highlight cards go here -->
     </div>
   </section>
   ```

2. Add a new highlight card:
   ```html
   <div class="highlight-card">
     <div class="highlight-icon"><i class="fas fa-shield-alt"></i></div>
     <h3>Privacy-Preserving Machine Learning</h3>
     <p>Novel techniques for training machine learning models while protecting sensitive data through differential privacy and secure multi-party computation.</p>
   </div>
   ```

3. Font Awesome Icon Reference:
   - Privacy/Security: `fa-shield-alt`, `fa-lock`, `fa-user-shield`
   - Networks: `fa-network-wired`, `fa-project-diagram`
   - AI/ML: `fa-brain`, `fa-robot`, `fa-microchip`
   - IoT: `fa-wifi`, `fa-mobile-alt`, `fa-sensor`
   - Data: `fa-database`, `fa-chart-bar`, `fa-analytics`

## Research and Publications

### Adding Research Publications

Publications are displayed on the research page in chronological order.

1. Locate the publications section in `research.html`:
   ```html
   <section class="publications-section">
     <h2>Publications</h2>
     <div class="pub-cards">
       <!-- Publication entries here -->
     </div>
   </section>
   ```

2. Add a new publication entry:
   ```html
   <article class="pub-card">
     <h3>Publication Title</h3>
     <p><strong>Authors:</strong> Author 1, Author 2, Author 3</p>
     <p><strong>Conference/Journal:</strong> Full conference/journal name (Abbreviation Year)</p>
     <p><strong>Abstract:</strong> Brief abstract or summary of the publication.</p>
     <div class="publication-resources">
       <a href="resources/papers/paper-filename.pdf" class="resource-link" target="_blank">
         <span class="resource-icon paper-icon"></span>PDF
       </a>
       <a href="https://doi.org/paper-doi" class="resource-link" target="_blank">
         <span class="resource-icon"></span>DOI
       </a>
     </div>
   </article>
   ```

3. Upload the PDF file to `resources/papers/` directory
4. Update links with the correct file path and DOI

### Managing Publication Resources

For each publication, you can provide various downloadable resources:

```html
<div class="publication-resources">
  <!-- PDF Paper -->
  <a href="resources/papers/paper-name.pdf" class="resource-link" target="_blank">
    <span class="resource-icon paper-icon"></span>PDF
  </a>
  
  <!-- DOI Link -->
  <a href="https://doi.org/paper-doi" class="resource-link" target="_blank">
    <span class="resource-icon"></span>DOI
  </a>
  
  <!-- Code Repository -->
  <a href="https://github.com/username/repo" class="resource-link" target="_blank">
    <span class="resource-icon"></span>Code
  </a>
  
  <!-- Dataset -->
  <a href="path/to/dataset" class="resource-link" target="_blank">
    <span class="resource-icon"></span>Dataset
  </a>
</div>
```

### Updating Research Areas

Research areas are displayed as interactive cards on the research page.

1. Locate the research interests section:
   ```html
   <section class="research-interests">
     <h2>Research Focus Areas</h2>
     <div class="interests-grid">
       <!-- Research interest cards -->
     </div>
   </section>
   ```

2. Add or edit a research interest card:
   ```html
   <div class="interests-card">
     <img src="images/icons/icon-name.png" alt="Research Area" class="card-icon" />
     <h3>Research Area Title</h3>
     <ul>
       <li>Specific research topic 1</li>
       <li>Specific research topic 2</li>
       <li>Specific research topic 3</li>
     </ul>
   </div>
   ```

## Professional Service

### Adding Conference Entries

Conference activities are listed on the service page under various categories.

#### Conference Leadership Roles

1. Open `service.html` and find the Conference Leadership section:
   ```html
   <section class="info-card">
     <h2>Conference Leadership Roles</h2>
     <ul>
       <!-- Existing entries here -->
     </ul>
   </section>
   ```

2. Add a new role with proper formatting:
   ```html
   <li><strong>Role Title</strong>, Conference Full Name (ACRONYM Year)</li>
   ```

#### Technical Program Committee Memberships

1. Locate the TPC section and add a new entry:
   ```html
   <li><strong>Conference Name (ACRONYM):</strong> Year1, Year2, Year3</li>
   ```

2. For track-specific roles:
   ```html
   <li><strong>Conference Name (ACRONYM):</strong> Year1, Year2 (Track Name)</li>
   ```

### Adding Editorial Roles

1. Find the Editorial Roles section:
   ```html
   <section class="info-card">
     <h2>Editorial Roles</h2>
     <ul>
       <!-- Existing entries here -->
     </ul>
   </section>
   ```

2. Add a new editorial role:
   ```html
   <li><strong>Role Title</strong>, Journal Name (Publisher), Start Year-Present/End Year</li>
   ```

3. For special issues:
   ```html
   <li><strong>Guest Editor</strong>, Special Issue on "Topic", Journal Name (Publisher), Year</li>
   ```

### Adding Professional Memberships

1. Locate the Professional Memberships section:
   ```html
   <ul class="membership-list">
     <!-- Existing memberships -->
   </ul>
   ```

2. Add a new membership:
   ```html
   <li><strong>Membership Level</strong>, Organization Name, Start Year-Present/End Year</li>
   ```

### Adding Grant Review Panels

1. Find the Grant Review section:
   ```html
   <h3>Grant Review Panels</h3>
   <ul>
     <!-- Existing entries -->
   </ul>
   ```

2. Add a new entry:
   ```html
   <li><strong>Organization Name</strong> Reviewer (Year or Year Range)</li>
   ```

## Courses and Teaching

### Updating Course Information

1. Open `courses.html` and locate the course section you want to update:
   ```html
   <section class="course-level">
     <h3>Graduate Courses</h3>
     <div class="course-grid">
       <!-- Course cards -->
     </div>
   </section>
   ```

2. Add or edit a course card:
   ```html
   <div class="course-card">
     <img src="images/course-icon.png" alt="Course Name" class="course-icon">
     <h4>CSC XXX: Course Title</h4>
     <p><strong>Description:</strong> Brief course description covering main topics and objectives.</p>
     <p><strong>Last Taught:</strong> Semester Year</p>
     <p><a href="course-url" target="_blank" class="link-highlight">Course Materials</a></p>
   </div>
   ```

### Managing Course Resources

For each course, you can provide links to resources:

```html
<div class="course-resources">
  <a href="path/to/syllabus.pdf" target="_blank" class="resource-link">Syllabus</a>
  <a href="https://canvas.usm.edu" target="_blank" class="resource-link">Canvas</a>
  <a href="https://github.com/username/course-repo" target="_blank" class="resource-link">GitHub</a>
</div>
```

## Visual Elements

### Uploading New Images

Follow these guidelines for adding new images to the website:

1. **Preparation**:
   - Optimize all images for web (use tools like TinyPNG, ImageOptim)
   - Use appropriate file formats (JPG for photos, PNG for graphics with transparency)
   - Follow consistent naming conventions (lowercase, hyphenated: `team-member-name.jpg`)

2. **Sizing Guidelines**:
   - Team member photos: 400x400px (1:1 ratio)
   - Lab Director photo: 400x500px (4:5 ratio)
   - Research icons: 100x100px (1:1 ratio)
   - Course icons: 200x200px (1:1 ratio)
   - Hero images: 1200x600px (2:1 ratio)

3. **Directory Structure**:
   - Team photos: `/images/team/`
   - Icons and logos: `/images/icons/` and `/images/logos/`
   - Course images: `/images/courses/`
   - Publication resources: `/resources/papers/`

### Modifying Logo Sizes

If you need to adjust logo sizes:

1. Open `CSS/style.css`
2. Find the logo size definitions:
   ```css
   .left-logo {
     height: 80px;
     width: auto;
   }
   
   .right-logo {
     height: 80px;
     width: auto;
   }
   ```

3. Adjust the height value as needed (width will scale proportionally)

### Editing the Icon Strip

The icon strip appears on multiple pages and showcases key themes:

1. Locate the icon strip in the HTML file:
   ```html
   <div class="icon-strip">
     <img src="images/icons/ai-icon.png" alt="AI Icon" id="AI-icon">
     <img src="images/icons/hardware-icon.png" alt="Hardware Icon" id="Hardware-icon">
     <img src="images/icons/security-icon.png" alt="Security Icon" id="Security-icon">
   </div>
   ```

2. To replace an icon:
   - Prepare the new icon (recommended size: 130px height)
   - Save to `/images/icons/` directory
   - Update the `src` attribute in the HTML

## Forms and Interactive Elements

### Managing the Meeting Request Form

The meeting request form allows visitors to schedule meetings with lab members:

1. Locate the form in `contact.html`:
   ```html
   <form id="meeting-form" class="meeting-form">
     <!-- Form fields -->
   </form>
   ```

2. To modify form fields, edit the HTML structure:
   ```html
   <div class="form-group">
     <label for="name">Your Name</label>
     <input type="text" id="name" name="name" required>
   </div>
   ```

3. To change form handling, update the JavaScript in `js/script.js`

## Troubleshooting

### Common Issues

#### Images Not Displaying

1. **Check file path**: Ensure the path in `src` attribute is correct
2. **Verify file existence**: Confirm the image file exists in the specified directory
3. **Check file permissions**: Ensure the file has appropriate read permissions
4. **Clear browser cache**: Hard refresh with Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

#### Layout Problems

1. **Inconsistent spacing**: Check for missing closing tags in HTML
2. **Elements overflow**: Ensure `max-width: 100%` is applied to problematic elements
3. **Misaligned content**: Inspect the element with browser developer tools to identify CSS issues

#### Mobile Responsiveness Issues

1. **Test on different devices**: Use browser developer tools to simulate various screen sizes
2. **Check media queries**: Ensure appropriate media queries are in place for different breakpoints
3. **Fix touch targets**: Make sure interactive elements are at least 44x44px for touch devices

For additional assistance or complex issues, please contact the website administrator.

---

## 📞 Contact

For questions about website maintenance:

- **Website Administrator**: Zohaib Ch
- **Email**: w10120702@usm.edu 
