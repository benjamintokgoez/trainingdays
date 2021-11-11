(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{344:function(e,t,a){e.exports=a.p+"assets/img/pipelines.0565036c.svg"},651:function(e,t,a){e.exports=a.p+"assets/img/ci-cd-build-flow.72911aa1.png"},652:function(e,t,a){e.exports=a.p+"assets/img/published-artifact.b7d83d8a.png"},653:function(e,t,a){e.exports=a.p+"assets/img/scm-common-pipeline.3d3fb4e0.png"},654:function(e,t,a){e.exports=a.p+"assets/img/scm-common-cd-tasks.e5e00de2.png"},655:function(e,t,a){e.exports=a.p+"assets/img/agent-spec.0cf192d7.png"},656:function(e,t,a){e.exports=a.p+"assets/img/variable-scopes.9e67d5f0.png"},657:function(e,t,a){e.exports=a.p+"assets/img/scm-common-cd-variables.7b16f04c.png"},658:function(e,t,a){e.exports=a.p+"assets/img/pre-deployment-conditions.c466477c.png"},659:function(e,t,a){e.exports=a.p+"assets/img/pipeline-approval.64194fcd.png"},660:function(e,t,a){e.exports=a.p+"assets/img/challenge-3-wrapup.bcdb5ac6.png"},889:function(e,t,a){"use strict";a.r(t);var s=a(32),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"challenge-3-work-with-azure-pipelines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenge-3-work-with-azure-pipelines"}},[e._v("#")]),e._v(" Challenge 3: Work with Azure Pipelines")]),e._v(" "),s("p",[s("img",{attrs:{src:a(344),alt:"Azure Pipelines"}})]),e._v(" "),s("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),s("ul",[s("li",[e._v("Create a Service Connection to deploy Azure resources")]),e._v(" "),s("li",[e._v("Create a CI build to create and version your deployment artifacts")]),e._v(" "),s("li",[e._v("Create a CD build to deploy your artifacts to Azure")])]),e._v(" "),s("p",[e._v("In this challenge we start to deploy the sample application's common used components to Azure. We create an instance of Azure Service Bus and an Azure Cosmos DB account using an ARM template. You do not need to create the ARM template by yourself, it is already available in the repository.")]),e._v(" "),s("p",[s("em",[e._v("Azure Pipelines")]),e._v(" is a cloud service that you can use to "),s("em",[e._v("automatically build and test your code project")]),e._v(" and make it available to other users. It works with just about any language or project type.")]),e._v(" "),s("p",[e._v("Azure Pipelines combines "),s("em",[e._v("continuous integration (CI)")]),e._v(" and "),s("em",[e._v("continuous delivery (CD)")]),e._v(" to constantly and consistently test and build your code and ship it to any target.")]),e._v(" "),s("p",[e._v("If you have never used Azure Pipelines have a look at the "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Here is an overview of what we want to achieve in this challenge:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(651),alt:"CI-CD-Flow"}})]),e._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#create-an-azure-service-connection"}},[e._v("Create an Azure Service Connection")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#create-your-first-ci-build"}},[e._v("Create your first CI Build")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#create-your-first-cd-build"}},[e._v("Create your first CD Build")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#merge-your-changes-to-the-master-branch"}},[e._v("Merge your Changes to the Master Branch")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#wrap-up"}},[e._v("Wrap-Up")])])]),e._v(" "),s("h2",{attrs:{id:"create-an-azure-service-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-service-connection"}},[e._v("#")]),e._v(" Create an Azure Service Connection")]),e._v(" "),s("p",[e._v("Before we can start to deploy Azure resources we need to create a "),s("em",[e._v("Service Connection")]),e._v(" to Azure's Resource Manager that allows us to access your Azure subscription. When the Azure Pipeline's build agent executes deployment steps the agent must use a "),s("em",[e._v("Service Principal")]),e._v(" that was granted to access your Azure subscription as an "),s("em",[e._v("Owner")]),e._v(". You can define service connections in Azure Pipelines that are available for use in all your tasks:")]),e._v(" "),s("ol",[s("li",[e._v("In your Azure DevOps project, open the Service connections page from the project settings page")]),e._v(" "),s("li",[e._v("Choose "),s("em",[e._v("New Service connection")]),e._v(" and select "),s("em",[e._v("Azure Resource Manager")])]),e._v(" "),s("li",[e._v("Give your connection a name")]),e._v(" "),s("li",[e._v("Select "),s("em",[e._v("Subscription")]),e._v(" under Scope level")]),e._v(" "),s("li",[e._v("Select your subscription and click "),s("em",[e._v("OK")])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📝 After you have clicked "),s("em",[e._v("OK")]),e._v(" Azure DevOps tries to access Azure AD on behalf of the signed-in user (that's you, of course) to create a Service Principal and assigns it the "),s("em",[e._v("Owner")]),e._v(" role of your selected subscription. If you get an error you can use the "),s("em",[e._v("use the full version of the service connection dialog")]),e._v(" link to use a predefined Service Principal that was created by your Azure AD administrator.")])]),e._v(" "),s("h2",{attrs:{id:"create-your-first-ci-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-ci-build"}},[e._v("#")]),e._v(" Create your first CI Build")]),e._v(" "),s("p",[e._v("Go to Azure Boards and set the User Story S3 to active. We create a new build definition that copies the needed ARM Template to an artifact location that is managed by Azure DevOps. An artifact location is a storage location where Azure Pipelines copies all files that are needed for a successful deployment of an application. The artifact location is linked to your build. Every build gets its own unique build number and therefore your artifact is versioned, too.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Create a feature branch "),s("code",[e._v('"features/scmcommcicd"')]),e._v(" and check it out")])]),e._v(" "),s("li",[s("p",[e._v("Create a folder named "),s("code",[e._v('"pipelines"')]),e._v(" in the directory "),s("code",[e._v("day4/apps")])])]),e._v(" "),s("li",[s("p",[e._v("Add a file named "),s("code",[e._v("scm-common-ci.yaml")])])]),e._v(" "),s("li",[s("p",[e._v("Add the following yaml snippet that defines the "),s("em",[e._v("build trigger")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("pr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" none\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("trigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" master\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" day4/apps/infrastructure/templates/scm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("common.json\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" day4/apps/pipelines/cd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("scm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("common.yaml\n\n")])])]),s("p",[e._v("Here we specified when the build must be triggered. The build is triggered only if changes were made to the master branch and when the changes were made to either "),s("code",[e._v("*day4/apps/infrastructure/templates/scm-common.json*")]),e._v(" or "),s("code",[e._v("*day4/apps/pipelines/cd-scm-common.yaml*")])])]),e._v(" "),s("li",[s("p",[e._v("Add the following yaml snippet that defines the "),s("em",[e._v("build steps")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Build\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Build Scm Common\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("pool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("vmImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" UseDotNet@2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Acquire .NET Core Sdk 3.1.x'")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("packageType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Sdk\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 3.1.x\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" CopyFiles@2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sourceFolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" day4/apps/infrastructure/templates\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("contents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[e._v("\n           scm-common.json")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("targetFolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $(Build.ArtifactStagingDirectory)\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" PublishPipelineArtifact@1\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("targetPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $(Build.ArtifactStagingDirectory)\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("artifactName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" drop\n")])])]),s("p",[e._v("We specified to copy the needed ARM template to our artifact's drop location named "),s("em",[e._v('"drop"')]),e._v(".\nFirst we use a copy task to copy the ARM Template to the build agent's "),s("em",[e._v('"ArtifactStagingDirectory"')]),e._v(". This directory is a temp directory on the build agent. After that we publish the build agent's artifact directory to link the created artifacts to the build. In addition we specified to use a build agent that uses the latest Ubuntu version.")])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📝 You can find a list of supported build agent images "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/pipelines/agents/hosted?view=azure-devops#use-a-microsoft-hosted-agent",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[e._v("Commit your changes and push the branch to your remote repository.")]),e._v(" "),s("li",[e._v("Navigate to your Azure DevOps project")]),e._v(" "),s("li",[e._v("In your project navigate to the Pipelines page. Then choose the action to create a new Pipeline")]),e._v(" "),s("li",[e._v("Walk through the steps of the wizard by first selecting Azure Repos Git as the location of your source code")]),e._v(" "),s("li",[e._v("Select your college repository")]),e._v(" "),s("li",[e._v("Select "),s("em",[e._v('"Existing Azure Pipelines YAML file"')])]),e._v(" "),s("li",[e._v("Select your feature branch and specify the path: "),s("em",[e._v('"/day4/apps/pipelines/scm-common-ci.yaml"')])]),e._v(" "),s("li",[e._v("Run your CI Build by clicking the action "),s("em",[e._v('"Run"')])]),e._v(" "),s("li",[e._v("Rename your pipeline to "),s("em",[e._v('"SCM-Common-CI"')])]),e._v(" "),s("li",[e._v("Navigate to the Pipelines page and open the last run of the build "),s("em",[e._v('"SCM-Common-CI"')]),e._v(". You see that the artifact is linked to your build.\n"),s("img",{attrs:{src:a(652),alt:"Published Artifact"}})])]),e._v(" "),s("h2",{attrs:{id:"create-your-first-cd-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-cd-build"}},[e._v("#")]),e._v(" Create your first CD Build")]),e._v(" "),s("p",[e._v("Now that we have created the build artifact, we can create a "),s("em",[e._v("Release build")]),e._v(" to deploy the common component's Azure infrastructure for the sample application to a Development and Testing stage.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📝 You find a detailed documentation about Release pipelines "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/pipelines/release/?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(653),alt:"SC-Common-Pipeline"}})]),e._v(" "),s("ol",[s("li",[e._v("Navigate to your Azure DevOps project and open the Releases page under Pipelines.")]),e._v(" "),s("li",[e._v("Choose the action item to create a new Pipeline and start with an "),s("em",[e._v('"Empty Job"')]),e._v(".")]),e._v(" "),s("li",[e._v("Rename "),s("em",[e._v('"Stage1"')]),e._v(" to "),s("em",[e._v('"Development"')])]),e._v(" "),s("li",[e._v("Rename the Release pipeline to "),s("em",[e._v('"SCM-Common-CD"')])]),e._v(" "),s("li",[e._v("Click "),s("em",[e._v('"Add an artifact"')]),e._v(" and select your "),s("em",[e._v('"SCM-Common-CI"')]),e._v(" and always use the latest build.")]),e._v(" "),s("li",[e._v("Click the "),s("em",[e._v('"Flash"')]),e._v(" icon under artifacts and set the trigger to "),s("em",[e._v('"Continuous deployment trigger"')]),e._v(". This will trigger the Release pipeline whenever a new deployment artrifact of the build "),s("em",[e._v('"SCM-Common-CI"')]),e._v(" is created.")]),e._v(" "),s("li",[e._v("Go to the variable section and add the following variables:")])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("em",[e._v("ResourceGroup")])]),e._v(" "),s("td",[e._v("ADC-DAY4-SCM-DEV")])]),e._v(" "),s("tr",[s("td",[s("em",[e._v("ApplicationInsightsName")])]),e._v(" "),s("td",[e._v("appinsights-scm-dev")])]),e._v(" "),s("tr",[s("td",[s("em",[e._v("ServiceBusnamespaceName")])]),e._v(" "),s("td",[e._v("{your prefix}-scm-dev (the namespace name must be globally unique)")])]),e._v(" "),s("tr",[s("td",[s("em",[e._v("ServiceBusSKU")])]),e._v(" "),s("td",[e._v("Standard")])]),e._v(" "),s("tr",[s("td",[s("em",[e._v("CosmosDbAccountName")])]),e._v(" "),s("td",[e._v("{your prefix}-scm-dev (the account name must be globally unique)")])])])]),e._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[s("p",[e._v("Go to the Tasks section of the "),s("em",[e._v('"Development"')]),e._v(" stage and add the task "),s("em",[e._v('"ARM template deployment"')])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Select the Azure subscription")])]),e._v(" "),s("li",[s("p",[e._v("Use the variable for the ResourceGroup: $(ResourceGroup)")])]),e._v(" "),s("li",[s("p",[e._v("Select a location where you want to deploy the Azure resources")])]),e._v(" "),s("li",[s("p",[e._v("Under "),s("em",[e._v("Template")]),e._v(" select the "),s("em",[e._v('"scm-common.json"')]),e._v(" ARM template by clicking "),s("em",[e._v('"..."')])])]),e._v(" "),s("li",[s("p",[e._v("Override parameters: Copy the following line, make sure that you copy the whole line:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("-applicationInsightsName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ApplicationInsightsName"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -serviceBusNamespaceName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ServiceBusNamespaceName"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -serviceBusSKU "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ServiceBusSku"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -cosmosDbAccountName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("CosmosDbAccountName"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])])])]),e._v(" "),s("p",[s("img",{attrs:{src:a(654),alt:"SCM Common CD tasks"}})])]),e._v(" "),s("li",[s("p",[e._v("Under Agent job set the Agent specification to the latest Ubuntu version\n"),s("img",{attrs:{src:a(655),alt:"SCM Common Agent Spec"}})])]),e._v(" "),s("li",[s("p",[e._v("Save the definition and run the pipeline by clicking "),s("em",[e._v('"Create release"')]),e._v(".")])])]),e._v(" "),s("h3",{attrs:{id:"add-a-testing-stage-to-your-cd-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-testing-stage-to-your-cd-build"}},[e._v("#")]),e._v(" Add a Testing stage to your CD Build")]),e._v(" "),s("p",[e._v("Now we have successfully deployed the common components to the Development environment. Next we create another stage that is deployed when the deployment to the Development stage was successful.\nIn addition we add a "),s("em",[e._v('"Pre-deployment conditions"')]),e._v(" step to control the deployment to the Testing stage manually.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Start editing the CD Build "),s("em",[e._v("SCM-Common-CD")]),e._v(" and go to the Pipeline view")])]),e._v(" "),s("li",[s("p",[e._v("Clone the "),s("em",[e._v("Development")]),e._v(" stage and rename the cloned stage to "),s("em",[e._v('"Testing"')])])]),e._v(" "),s("li",[s("p",[e._v("Open the "),s("em",[e._v("Variables")]),e._v(" view")])]),e._v(" "),s("li",[s("p",[e._v("When you open the scope dropdown of a variable you notice that there are three scopes available:")]),e._v(" "),s("ul",[s("li",[e._v("Release: The variable is used for all stages of the pipeline")]),e._v(" "),s("li",[e._v("Development: The variable is only applied to the stage "),s("em",[e._v("Development")])]),e._v(" "),s("li",[e._v("Testing: The variable is only applied to the stage "),s("em",[e._v("Testing")])]),e._v(" "),s("li",[s("img",{attrs:{src:a(656),alt:"Variable Scopes"}})])])]),e._v(" "),s("li",[s("p",[e._v("Move all existing variables to the scope of the "),s("em",[e._v("Development")]),e._v(" stage")])]),e._v(" "),s("li",[s("p",[e._v("Add all variables again with the same name but change all values to contain the word "),s("em",[e._v("test")]),e._v(" as suffix or prefix and apply them to the scope "),s("em",[e._v("Testing")]),e._v(" "),s("img",{attrs:{src:a(657),alt:"SCm Common CD Variables"}})])]),e._v(" "),s("li",[s("p",[e._v("Switch back to the pipeline view of your release definition and set the "),s("em",[e._v("Pre-deployment conditions")]),e._v(" as follows\n"),s("img",{attrs:{src:a(658),alt:"Pre-deployment conditions"}})])]),e._v(" "),s("li",[s("p",[e._v("Save your release definition")])])]),e._v(" "),s("h3",{attrs:{id:"approve-the-deployment-to-the-testing-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#approve-the-deployment-to-the-testing-environment"}},[e._v("#")]),e._v(" Approve the deployment to the Testing environment")]),e._v(" "),s("p",[e._v("Now create a new realease and wait until the "),s("em",[e._v("Development")]),e._v(" stage is deployed.\nYou will see that the pipeline is stopped and that the deployment to the "),s("em",[e._v("Testing")]),e._v(" stage must first be approved by a predefined approver.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(659),alt:"Approval"}})]),e._v(" "),s("p",[e._v("Approve the the deployment to the "),s("em",[e._v("Testing")]),e._v(" environment.")]),e._v(" "),s("h2",{attrs:{id:"merge-your-changes-to-the-master-branch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge-your-changes-to-the-master-branch"}},[e._v("#")]),e._v(" Merge your Changes to the Master Branch")]),e._v(" "),s("p",[e._v("Now you can create a "),s("em",[e._v("Pull Request")]),e._v(" and merge your changes to the master branch.")]),e._v(" "),s("h2",{attrs:{id:"wrap-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),s("p",[e._v("🥳 "),s("strong",[e._v("Congratulations")]),e._v(" - You have completed the UseStory S3! 🥳")]),e._v(" "),s("p",[e._v("We have created a CI/CD Pipeline that is triggered whenever changes are made to the sample application's common infrastructure."),s("br"),e._v("\nTake a look at the Azure portal and see which Azure resources were created. And don't forget to go to the Azure Boards and complete the User Story S3.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(660),alt:"WrapUp"}})]),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-2.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),s("RouterLink",{attrs:{to:"/day4-azdevops/"}},[e._v("🔼 Day 4")]),e._v(" | "),s("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-4.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);