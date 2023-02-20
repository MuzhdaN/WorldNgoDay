# **Earthquake Relief**

In preparation for World NGO Day, Earthquake Relief pays tribute to some of the many organizations that are helping and comforting the victims of the recent earthquakes in Turkey and Syria.

The human and economic efforts of these organizations leave a positive impact on the lives of those who are somehow involved with them.

Earthquake Relief adds to that effort by presenting the user with an overview of the contribution of NGOs in daily life, it focuses on the aid currently being provided in Turkey and Syria and leaves the user the opportunity to join that help through donations.
The NGOs present in our application were chosen at random and with the sole purpose of celebrating their global impact in a general way.

Let's celebrate supporting NGOs!

Visit the live [website](https://muzhdan.github.io/WorldNgoDay/) in here.

![This is an image](/assets/images/responsive-image.png)

## **Features**
<hr>

### **Existing features**
- **Navigation bar** 
![navbar](https://user-images.githubusercontent.com/79607397/220002379-24d3290e-86e8-4f5f-8966-c954cee484c0.PNG)
In the navbar in the left side, we have our website name and in the left side the sections of our website. By clicking over each one it will take you to its realted section. 

<br>

- **Hero section** 
   - About-us part
    ![about-us2](https://user-images.githubusercontent.com/79607397/220002742-c3a45c56-5f9a-45dd-9e04-4f11b8cc0148.PNG)
The hero-section contains about-us, which tells what our website is and what we are trying to achieve. Additionally, on the left side of the hero-section there is a video showing the related scenes from the earthquake. Research shows people become annoyed with autoplay and even block it on their computers, so we have not set autoplay for the video for a better user experience.  

    - Video part
    ![about-us1](https://user-images.githubusercontent.com/79607397/220002757-d34e2c0f-1bd9-4dc0-a798-d14a69dd97ab.PNG)
A few seconds after the video ends, a picture of a little girl appears with a message over it. 

<br>

- **About NGOs section**
   ![about-NGOs](https://user-images.githubusercontent.com/79607397/220007345-9b13ced0-1887-4ebc-831e-f4ec2f1a129d.PNG)
This section recognizes and celebrates NGOs hard wordk and provides a short information about it. <br> 
*As this section is at in the end of the hero-section, therefore, it can be accessed from the navbar by clicking about-us.* 

<br>

- **They help section**
    ![they-help1](https://user-images.githubusercontent.com/79607397/220004429-f29e2da8-c09f-4429-9c99-c7d74c5d9f1c.PNG)
![they-help2](https://user-images.githubusercontent.com/79607397/220004452-bcb536ea-fa63-41c5-94bc-b00587353b47.PNG)

In this section, you can find a list of the NGOs that are currently helping Turkey and Syria. Each NGO has been carefully chosen to ensure their credibility. 
As the logo and name of the NGOs are the same, the logo was chosen as their title. Thereafter, a short introduction to the organization's work, along with an explanation of how it is currently helping Turkey and Syria, has been added. Also at the end, a link to their website has also been added, so people can learn more about them there.

<br>

- **You can help too section**
 ![you-can-help](https://user-images.githubusercontent.com/79607397/220006311-a82badfd-6fdd-40b9-ae20-7070a1fcacce.PNG)
This section contains a direct link to each of the NGOs from the They-Help-section. Information has been added about how the donations will be used so the people would know how they are helping the affected ones. 

<br>

- **Collaborators section** 
![team-section](https://user-images.githubusercontent.com/79607397/220006762-460a2788-9af7-4c60-84b8-2c6fa2a185c5.PNG)
This section shows the people who has worked on this website
 
 <br>
 
- **Footer** 
  ![footer](https://user-images.githubusercontent.com/79607397/220006884-b2fbc52a-874e-4983-af36-8804d98d2918.PNG)
  This footer shows the copyright of this website and the date and theme of the hackathon.

<br>


## **Features left to be implemented**
- Add more NGOs 

<br>

## **Testing**

### Links

All internal and external links have been tested and work correctly.

### Markup validator

After the validation of the index.html at the official W3 Markup Validator [Markup validator](https://validator.w3.org/), there were:
- 3 errors
- 1 warning
- 9 info statements

All of these points were addressed and the index.html was passed again for validation resulting in all errors and info statements being solved.
The warning remains, but it can't be solved following the suggestion given by the Markup validator.

![This is the result of the markup validator](/assets/images/markup-result.png)

The required div tags for this section are already in place and there isn't any need to use an h1-h2 tag.

### CSS validator

The style provided through the style.css file passed the validation at the official W3 validator Service at [W3 validator](https://jigsaw.w3.org/css-validator/validator.html.en)

<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>


### JS Hint

JavaScript validation at [JS Hint](https://jshint.com/) passed without any errors nor warnings:

![This is the jshint result](/assets/images/jshint-result.png)

### Lighthouse

From an accesibility perspective, these are the results for desktop and mobile run on the lighthouse of the Google Dev Tools:

![This is the result for desktop](/assets/images/lighthouse_desktop.png)

![This is the result for mobile](/assets/images/lighthouse_mobile.png)

<br>

### Responsiveness

The responsiveness has been succesfully tested in desktop, laptop and mobile.
All of the content (text, media, links) keep their consistency and don't appear pixelated.
The image of the application viewed on different devices comes from [Am I responsive](https://ui.dev/amiresponsive). 

<br>

## **Design**

### Wireframes

#### Desktop
![Desktop wireframe](./assets/images/desktop.png)
#### Mobile
![Desktop wireframe](./assets/images/mobile.png)

<br>

## **Technologies**

- HTML, CSS, JavaScript
- Balsamiq: Wireframes were created using [Balsamiq Wireframes for Desktop ](https://balsamiq.com/wireframes/desktop/)
- Bootstrap: Part of the styling of our application was made using Bootstrap 5.2.3 [Bootstrap](https://getbootstrap.com/)

<br>

## **Deployment**

This website was deployed on GitHub. <br>
The steps to deploy were as follows:
- In the GitHub repository, navigate to the *Settings* tab
- On the right side, you will see the *pages* button after clicking that the GitHub pages will appear
- Under *build and deployment* there is a *source* sub-heading
- Under that there is a drop-down menu called *deploy from a branch*, select the main Branch and select *save*
- After a few seconds a message is displayed to indicate the successful deployment. Finally the site link appears. 

<br>

## **Credits**

### Content
- The explanation about the way the donations are used comes from the websites of the NGOs presented in our application.
- General knowledge about NGOs comes from [Wikipedia](https://en.wikipedia.org/wiki/Non-governmental_organization) and the official #NGO World Day website [NGO World Day](https://worldngoday.org/).
- The information about the NGOs and logos was taken from their official websites and social media.

### Media
- Logo for the head was taken from [flaticon](https://www.flaticon.com/search?word=help)
- [Googlefonts](https://fonts.google.com/)
- The video used in the hero section comes from ????

## **Acknowledgements**

Each active member of the team was keen to the completion of this project.

Well done everyone! Special thanks to our Scrum MASTER, Muzhda Noorzad, for solving all the conflicts before merging.

Thanks to our families and friends for their support and patience during this hackathon weekend.
