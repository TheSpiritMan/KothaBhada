FROM maven as build
WORKDIR /build
COPY . .
RUN mvn install

FROM openjdk:17-alpine
WORKDIR /deploy
COPY --from=build /build/target/KothaBhada.jar .
ENTRYPOINT ["java", "-jar", "KothaBhada.jar"]