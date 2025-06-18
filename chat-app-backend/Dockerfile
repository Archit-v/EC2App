FROM eclipse-temurin:23-jre

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file from the target directory
COPY target/chat-app-backend-0.0.1-SNAPSHOT.jar app.jar



# Expose the application port (default for Spring Boot)
EXPOSE 8081

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]