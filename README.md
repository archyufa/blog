# blog
Tech Blog post


## Blog Features

The blog has the following features:

- A clean, responsive design using Tailwind CSS.
- A list of blog posts on the home page with titles, dates, and excerpts.
- Individual pages for each blog post.
- Dynamic routing for blog posts.
- Static site generation for all pages, ensuring fast load times.

## Run blog post

To run this blog website, you would typically need to:

1. Set up a new Next.js project with TypeScript and Tailwind CSS.
2. Copy these files into your project structure.
3. Run `npm run dev` or `yarn dev` to start the development server.

## Build Image


1. Build the Docker image:

```
docker build -t your-registry/nextjs-blog:v1 .

```

2. To run the container locally, use:

```
docker run -p 3000:3000 nextjs-blog
```


## Deploy to Cloud Run

1. Set up Google Cloud CLI and authenticate:

```
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

2. Enable required APIs:

gcloud services enable artifactregistry.googleapis.com run.googleapis.com



3. Create a repository in Artifact Registry:

```
gcloud artifacts repositories create nextjs-blog --repository-format=docker --location=us-central1 --description='Docker repository for Next.js blog'
```


4. Configure Docker to use gcloud as a credential helper:
gcloud auth configure-docker us-central1-docker.pkg.dev


5. Build and push your Docker image:

```
docker build -t us-central1-docker.pkg.dev/$YOUR_PROJECT_ID/nextjs-blog/blog-app:v1 .
docker push us-central1-docker.pkg.dev/$YOUR_PROJECT_ID/nextjs-blog/blog-app:v1
```

6. Deploy to Cloud Run:

```
gcloud run deploy blog-app --image us-central1-docker.pkg.dev/$YOUR_PROJECT_ID/nextjs-blog/blog-app:v1 --platform managed --region us-central1 --allow-unauthenticated
```


**Note:** Replace YOUR_PROJECT_ID with your actual Google Cloud project ID

## Dockerfile details

1. Uses the official Node.js 18 Alpine image as the base. Alpine is a lightweight Linux distribution, which helps keep our image size small.
2. Sets the working directory in the container to `/app`.
3. Copies `package.json` and `package-lock.json` (if it exists) to the working directory.
4. Installs dependencies using `npm ci`, which is preferred for production builds as it's generally faster and more reliable than `npm install`.
5. Copies the rest of your application's code to the container.
6. Builds your Next.js application using `npm run build`.
7. Exposes port 3000, which is the default port for Next.js applications.
8. Sets the command to start your application using `npm start`.


## Roadmap features

* A markdown parser for writing blog posts in markdown format.
* A CMS integration for managing blog content.
* Pagination for the blog list.
* Categories or tags for blog posts.
* A search functionality.